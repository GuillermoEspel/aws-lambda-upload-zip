const uuid = require("uuid");

exports.handler = async (event) => {
  const res = {
    statusCode: 200,
    body: "",
  };
  const id = uuid.v4();
  res.body = JSON.stringify({ id });
  return res;
};
