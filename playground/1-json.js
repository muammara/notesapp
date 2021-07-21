

const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json').toString()
console.log(dataBuffer)

const dataParsed = JSON.parse(dataBuffer)
dataParsed.name = 'Ahmad'
dataParsed.age = 46
dataParsed.planet = "Venus"
fs.writeFileSync('1-json.json', JSON.stringify(dataParsed))

