const http = require('http')
const file =  require('fs')
const name = require('./name')
const {parse}  = require('querystring')

const handleRequest  = (req, res)=>{
     const {url}  = req;


    if(url=='/formSubmit' && req.method == "GET"){
      res.end("Form data get method")
     }

     if(url=='/formSubmit' && req.method == "POST"){
        let body  =  "";
        req.on('data', (data)=>{
            body += data.toString();
        })
        req.on('end', ()=>{
            const formData =  parse(body)
            console.log(formData.email);
        })

     }

     if(url=='/name'){
        const data  = JSON.stringify(name.name)
        res.end(data)
     }
     if(url == '/'){
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
}

http.createServer(handleRequest).listen(5000)
