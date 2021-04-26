const  multiplesof3and5 = (param) => {
    if (param <= 0 || !param) {
        return 0
    }
    let sum = 0
    for (let i = 0;i < param;i++) {
        if (i%3 === 0 || i%5 === 0) {
            sum += i
        }
    }
    return sum
}

module.exports = multiplesof3and5