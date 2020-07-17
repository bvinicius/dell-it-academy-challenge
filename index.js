const fs = require('fs');

const lines = fs.readFileSync('input.txt').toString().split('\n')

const notations = {}
const catalog = {}

const statements = lines.filter(line => !isQuestion(line))
const questions = lines.filter(line => isQuestion(line))

statements.forEach(statement => {
    if (isNotation(statement)) 
        learnNotation(statement)

    else if (isPriceDefinition(statement)) 
        learnPrice(statement)
})

questions.forEach(question => answer(question))

function isNotation(text) {
    return text.includes('representa')
}

function isQuestion(text) {
    return text.includes('?')
}

function isPriceDefinition(text) {
    return text.includes('valem')
}

function learnNotation(statement) {
    const words = statement.split(' ')
    const notation = words[0]
    const value = words[2]
    
    Object.assign(notations, {[notation]: value}) 
}

function learnPrice(statement) {
    const firstwords = statement.split(' valem ')[0].split(' ')
    const lastwords = statement.split(' valem ')[1].split(' ')

    const metal = firstwords[firstwords.length - 1]
    const total = lastwords[0]
    const romanQuant = firstwords.slice(0, -1).map(e => notations[e]).join('')
    const quant = romanToDecimal(romanQuant)

    const unitPrice = total / quant

    Object.assign(catalog, {[metal]: unitPrice})
}

function answer(question) {
    console.log(question)
    if (question.includes('vale')) {
        const names = question
            .split(' vale ')[1]
            .split(' ')
            .slice(0, -1)
        
        const value = names
            .map(e => notations[e])
            .join('')

        console.log(`${names.join(' ')} vale ${romanToDecimal(value)}\n`)
    } else if (question.includes('créditos')) {
        const info = question.split(' são ')[1].split(' ')
        info.pop() //removes '?'
        
        const metal = info.pop()
        const romans = info.map(e => notations[e]).join('')
        const quant = romanToDecimal(romans)

        const total = catalog[metal] * quant

        console.log(`${info.join(' ')} ${metal} vale ${total} créditos\n`)
    }
}

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

// const romans = fs.readFileSync('romans.txt').toString().split('\n')
// console.log(romans.map((e, i) => romanToDecimal(e) == i + 1).filter(e => !e))
