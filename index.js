const fs = require('fs');

const lines = fs.readFileSync('input.txt').toString().split('\n')

function romanToDecimal(value) {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const digits = value.split('')
    let sum = 0

    digits.forEach((d, i) => {
        const curr = values[d]
        const next = values[digits[i + 1]]

        curr < next ? sum -= curr : sum += curr
    })

    return sum
}

const romans = fs.readFileSync('romans.txt').toString().split('\n')
console.log(romans.map((e, i) => romanToDecimal(e) == i + 1).filter(e => !e))