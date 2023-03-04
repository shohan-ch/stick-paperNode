const http = require('http')
const file =  require('fs')
const name = require('./name')

const handleRequest  = (req, res)=>{
    
     const {url}  = req;
     if(url=='/name'){
        const data  = JSON.stringify(name.name)
        res.end(data)

     }
    file.readFile('./html/index.html', (err, data)=>{

        if(err){
            res.writeHead(404);
            res.write('Page not found')
        }else{
            res.write(data);
        }
        res.end()
    })

}

http.createServer(handleRequest).listen(5000)
