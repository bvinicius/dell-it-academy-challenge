const fs = require('fs');
const GalaticSells = require('./galatic.sells')

const input = fs.readFileSync('input.txt').toString()

new GalaticSells(input)