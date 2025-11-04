const fs = require("fs");
const path = require("path");

// change this folder path to any folder you want
const folderPath = "./testFolder"; 

// read all files from the folder
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error("Error reading folder:", err);
        return;
    }

    files.forEach(file => {
        const absolutePath = path.join(folderPath, file);
        const fileName = path.basename(absolutePath);
        const dirName = path.dirname(absolutePath);

        console.log("Absolute Path:", absolutePath);
        console.log("File Name:", fileName);
        console.log("Directory Name:", dirName);
        console.log("-----------------------------------------");
    });
});