// const os = require('os')

// console.log(os.totalmem())

// console.log(os.freemem())
// console.log(os)



const path = require('path')
const link = path.join('finder.com', 'users', 'srinivas')
console.log(path.parse(link))
console.log(path.parse(__filename))