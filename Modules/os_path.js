const os = require('os');

// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(os.cpus())
// console.log(__dirname)
// console.log(__filename)


const path = require('path')
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))