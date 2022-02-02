const index = require("./index");
const main = async () => {
  const result = await index.handler();
  console.log(result);
};
main();
