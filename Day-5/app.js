// http module - to create servers

import http from 'node:http';
import axios from 'axios';
// import url from 'url'
const server = http.createServer(
    (req,res)=>{
        // console.log(url)
        axios.get('https://dummyjson.com/products').then((response)=>{
            // res.write("welcome to our first server, srinivas peddada")
            res.writeHead(200,{
                "content-type": "application/json",
            })
            res.write(JSON.stringify(response.data))
            res.end()
        }).catch();
        
    }
)
server.listen(8000,()=>{
    console.log("The server has started")
})