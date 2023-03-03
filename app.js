const http = require('http')
const name = require('./name')

const server = http.createServer((req,res)=>{

    if(req.url=='/'){
        console.log(name.price)
        // res.end(name.name)
        // res.end('<h1>Bou I Love You tooss</h1>');
    }

})

server.listen(5000, ()=>{

    console.log("server liten at port 5000")


})