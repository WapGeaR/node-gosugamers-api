var api = require('./index.js')

url = 'http://www.gosugamers.net/counterstrike/tournaments/12084-mr-cat-masters-asian/3392-playoffs/12089-playoffs/matches/144414-vg-cyberzen-vs-fire-dragoon-e-sports'
api.parseMatch(url, (err, match) => {
  console.log(match)
})
