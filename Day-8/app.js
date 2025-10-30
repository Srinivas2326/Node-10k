import http from 'http';


let storedData = []
const server = http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end(`welcome to node.js`)
    if(req.url === '/' && req.method==='GET'){
        res.writeHead(200, {
            'content-type': 'text/plain'
        })
        res.write(`welcome to our website`)
        res.end()
    }
    else if(req.url === "/save" && req.method ==="POST"){
        let body = ''
        req.on('data', (chunk)=>{body += chunk})
        req.on('end', ()=>{
            try{
                let input = JSON.parse(body)
                storedData.push(input)
                res.writeHead(200, {
                    'content-type': 'application/json'
                })
                res.write(JSON.stringify({
                    message: `Successfully Posted`,
                    data :input,
                }))
                res.end()
            }
            catch{
                res.writeHead(400, {
                    'content-type': 'application/json'
                })
                res.write(JSON.stringify({
                    message: `Invalid data`
                }))
                res.end()
            }
        })
    }
    else if(req.url ==="/users" && req.method ==='GET'){
        res.writeHead(200, {
                    'content-type': 'application/json'
                })
                res.write(JSON.stringify({
                    message: `Data successfully fetched`,
                    data : storedData,
                }))
                res.end()
    }
    else if(req.url.startsWith('/update/') && req.method ==='PATCH'){
        const index = req.url.split('/')[2];
        if(isNaN(index) || index < 0 || index > storedData.length){
            res.writeHead(400, {
                    'content-type': 'application/json'
                })
                res.write(JSON.stringify({
                    message: `Invalid User Id`
                }))
                res.end()
        }
        let body = ''
        req.on('data', (chunk)=>{body += chunk})
        req.on('end', ()=>{
            try{
                let input = JSON.parse(body)
                storedData[index] = {...storedData[index], ...input}
                res.writeHead(200, {
                    'content-type': 'application/json'
                })
                res.write(JSON.stringify({
                    message: `Successfully Patched`,
                    data :storedData[index],
                }))
                res.end()
            }
            catch{
                res.writeHead(400, {
                    'content-type': 'application/json'
                })
                res.write(JSON.stringify({
                    message: `Invalid data`
                }))
                res.end()
            }
        })  
    }
})
server.listen(8000, ()=>{
    console.log("server has started")
})