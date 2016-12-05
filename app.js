const request = require('request')
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=2206%20holly%20street%20austin'

request({ url, json: true }, (err, res, body) => {
  // 2nd arg to stringify clips properties, so passing undefined
  // 3rd arg is how many spaces/tab
  console.log(JSON.stringify(body, undefined, 2))
})

