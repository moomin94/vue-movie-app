exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    //body에는 문자데이터만 가능
    body: JSON.stringify({
      name: "HEROPY",
      age: 85,
      email: "thesecon@gmail.com",
    }),
  };
};
