require("dotenv").config();
const AWS = require("aws-sdk");
const fs = require("fs");

const main = async () => {
  // Verify environment variables
  if (!process.env.AWS_REGION) return console.log("AWS_REGION not found.");
  if (!process.env.AWS_LAMBDA_NAME) return console.log("AWS_LAMBDA_NAME not found.");

  // Upload zip file to AWS Lambda
  const lambda = new AWS.Lambda({ region: process.env.AWS_REGION });
  const result = await lambda
    .updateFunctionCode({
      FunctionName: process.env.AWS_LAMBDA_NAME,
      ZipFile: fs.readFileSync("./deploy.zip"),
    })
    .promise();
  console.log(result);
};
main();
