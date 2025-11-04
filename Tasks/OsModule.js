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