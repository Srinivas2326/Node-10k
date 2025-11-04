
const fs = require('fs');

// fs.readFile("sample.txt", "utf8", (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })



// fs.writeFile("exe.html", 'utf8', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file created")
// })


const content = "My name is srinivas";
// fs.writeFile("exe.html", content, (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Content is added successfully")
//     }
// })




// fs.rename("exe.html", "sample.js", (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Modified file name")
//     }
// })




fs.unlink('sample.js', (err)=>{ 
    if(err){
        console.log(err)
    }
    else{
        console.log("File deleted successfully")
    }
})