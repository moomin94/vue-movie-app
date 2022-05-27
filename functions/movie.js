const axios = require("axios");
const { OMDB_API_KEY } = process.env;

exports.handler = async function (event) {
  console.log(event);
  const payload = JSON.parse(event.body);
  const { title, type, year, page, id } = payload;
  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  try {
    const { data } = await axios.get(url);
    if (data.Error) {
      return {
        statusCode: 400, // 400: 잘못된 요청 처리에 대한 에러 코드
        body: data.Error, // body 부분에는 문자 데이터만 반환해야 함, 객체/배열 데이터는 제대로 반환할 수 없다.
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message,
    };
  }
};
