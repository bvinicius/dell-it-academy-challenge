const Roman = require('./roman');

class GalaticSells {
    constructor(text) {
        const lines = text.split('\n')

        this.catalog = {}
        this.notations = {}

        this.statements = lines.filter(line => !this.isQuestion(line))
        this.questions = lines.filter(line => this.isQuestion(line))
    
        this.statements.forEach(statement => {
            if (this.isNotation(statement)) 
                this.learnNotation(statement)
        
            else if (this.isPriceDefinition(statement)) 
                this.learnPrice(statement)
        })

        this.questions.forEach(question => this.answer(question))
    }

    /**
     * Checks if `text` represents information about notations. 
     * @param {string} text The text to be analyzed.
     */
    isNotation(text) {
        return text.includes('representa')
    }
    
    /**
     * Checks if `text` represents a question.
     * @param {string} text The text to be analyzed.
     */
    isQuestion(text) {
        return text.includes('?')
    }
    
    /**
     * Checks if `text` represents information about metal prices.
     * @param {string} text 
     */
    isPriceDefinition(text) {
        return text.includes('valem')
    }
    
    /**
     * Checks if `word` is a valid catalog item or a valid interspacial notation
     * @param {string} word 
     */
    isValid(word) {
        return Object.keys(this.catalog).includes(word) || Object.keys(this.notations).includes(word)
    }

    /**
     * Processes a `statement` and stores the interspacial term and its value, in roman notation.
     * @param {string} statement 
     */
    learnNotation(statement) {
        const words = statement.split(' ')
        const notation = words[0]
        const value = words[2]
        
        Object.assign(this.notations, {[notation]: value}) 
    }
    
    /**
     * Processes a `statement` and stores the metal name and its unit price.
     * @param {string} statement 
     */
    learnPrice(statement) {
        const halfs = statement.split(' valem ')
    
        const firstwords = halfs[0].split(' ')
        const lastwords = halfs[1].split(' ')
    
        const metal = firstwords[firstwords.length - 1]
        const total = lastwords[0]
        const romanQuant = firstwords.slice(0, -1).map(e => this.notations[e]).join('')
        
        const quant = new Roman().toDecimal(romanQuant)
        const unitPrice = total / quant
    
        Object.assign(this.catalog, {[metal]: unitPrice})
    }

    /**
     * Processes a `question`, giving its appropriate answer.
     * @param {string} question 
     */
    answer(question) {
        if (question.includes('vale')) {
            const quant = question
                .split(' vale ')[1]
                .split(' ')
                .slice(0, -1)
    
            const invalid = quant.filter(e => !this.isValid(e))
            if (invalid.length) {
                console.log('Nem ideia do que isto significa!')
                return 
            }
        
            const value = quant
                .map(e => this.notations[e])
                .join('')
    
            console.log(`${quant.join(' ')} vale ${new Roman().toDecimal(value)}`)
        } else if (question.includes('créditos')) {
            const info = question
                .split(' são ')[1]
                .split(' ')
                .slice(0, -1)
                
            const invalid = info.filter(e => !this.isValid(e))
            if (invalid.length) {
                console.log('Nem ideia do que isto significa!')
                return 
            }
        
            const metal = info.pop()
            const roman = info.map(e => this.notations[e]).join('')
            const quant = new Roman().toDecimal(roman)
    
            const total = this.catalog[metal] * quant
    
            console.log(`${info.join(' ')} ${metal} vale ${total} créditos\n`)
        }
    }
}

module.exports = GalaticSells