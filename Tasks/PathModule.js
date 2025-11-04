// const path = require('path');


// // Join two directory names
// const joinedPath = path.join("folder1", "folder2");
// console.log("joined path:", joinedPath)


// //  Resolve absolute path
// const absolutePath = path.resolve("./public/assets/image.png");
// console.log("Absolute Path:", absolutePath)


// //  Extract filename, dirname, extension
// const filePath = '/home/user/docs/file.txt';
// const fileName = path.basename(filePath)
// const dirName = path.dirname(filePath);
// const fileExt = path.extname(filePath);

// console.log("Filename:", fileName)
// console.log("Directory Name:", dirName)
// console.log("Extension:", extName)


// //  Parse and log components separately
// const parsed = path.parse(filePath)
// console.log("Parsed Path:", parsed)

// console.log("root:", parsed.root)
// console.log("dir:", parsed.dir)
// console.log("base:", parsed.base)
// console.log("ext:", parsed.ext)
// console.log("name:", parsed.name)





// OS module

const os = require('os')
console.log("Username:", os.userInfo().username)
console.log("Hostname:", os.hostname())


// Show total and free memory in MB
const totalMemMB = os.totalmem() / (1024 * 1024);
const freeMemMB = os.freemem() / (1024 * 1024);

console.log("Total Memory (MB):", totalMemMB.toFixed(2));
console.log("Free Memory (MB):", freeMemMB.toFixed(2));

// 3) Log platform, architecture, CPU cores, CPU model name
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

const cpus = os.cpus();
console.log("Number of CPU Cores:", cpus.length);
console.log("CPU Model:", cpus[0].model);