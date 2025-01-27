const sayHello = (name) => {
    return `Bonjour, ${name} !`
}

const esTuMajeur = (age) => {
    if (age > 18) {
        return true
    }
    return false
}

module.exports = { sayHello, esTuMajeur }