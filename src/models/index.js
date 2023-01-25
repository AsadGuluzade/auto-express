const User = require('./user')

const asad = new User('armagan', 20)
const steve = new User('steve', 22)

const users = [asad, steve]

module.exports = { users }
