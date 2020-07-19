class Roman {

    /**
     * Given a `value` in roman notation, this method returns its value in decimal notation.
     * @param {string} value 
     */
    toDecimal(value) {
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
}

module.exports = Roman