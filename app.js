const request = require('request')
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=2206%20holly%20street%20austin'

request({ url, json: true }, (err, res, body) => {
  console.log(body)
})

