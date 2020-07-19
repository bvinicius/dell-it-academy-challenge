const fs = require('fs');
const GalaticSells = require('./GalaticSells')

const input = fs.readFileSync('input.txt').toString()

new GalaticSells(input)