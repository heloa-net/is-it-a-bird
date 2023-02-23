// const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { location } = event.queryStringParameters;

  const response = await fetch(
    `https://api.tomtom.com/search/2/poiSearch/${location}.json?limit=10&key=${process.env.REACT_APP_TOMTOM_API_KEY}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  }
}