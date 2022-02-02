require("dotenv").config();
const AWS = require("aws-sdk");
const AdmZip = require("adm-zip");
const fs = require("fs");

const main = async () => {
  // Verify environment variables
  if (!process.env.AWS_REGION) return console.log("AWS_REGION not found.");
  if (!process.env.AWS_LAMBDA_NAME) return console.log("AWS_LAMBDA_NAME not found.");

  // Verify zip file
  const zipFilename = "deploy.zip";
  if (fs.existsSync(zipFilename)) {
    fs.unlinkSync(zipFilename);
    console.log(`Eliminated ${zipFilename} successfully`);
  }

  // Compress directory
  const zip = new AdmZip();
  zip.addLocalFolder("./script-lambda");
  zip.writeZip(zipFilename);
  console.log(`Created ${zipFilename} successfully`);

  // Upload zip file to AWS Lambda
  const lambda = new AWS.Lambda({ region: process.env.AWS_REGION });
  const result = await lambda
    .updateFunctionCode({
      FunctionName: process.env.AWS_LAMBDA_NAME,
      ZipFile: fs.readFileSync(zipFilename),
    })
    .promise();
  console.log(result);
};
main();
