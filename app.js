const request = require('request')
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=2206%20holly%20street%20austin'

request({ url, json: true }, (err, res, body) => {
  // 2nd arg clips properties, passing undefined; 3rd = # spaces/tab
  let lat = res.body.results[0].geometry.location.lat
  let lng = res.body.results[0].geometry.location.lng

  console.log(JSON.stringify(lat, undefined, 2))
  console.log(JSON.stringify(lng, undefined, 2))
})

