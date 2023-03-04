const http = require('http')
const file =  require('fs')

const handleRequest  = (req, res)=>{
    
  
    file.readFile('./html/index.html', null , (err, data)=>{

        if(err){
            res.writeHead(404);
            res.write('Page not found')
        }else{
            res.writeHead(200,{
                
            });
            res.write(data);
        }
        res.end()
    })

    // res.end("Hello World");

}

http.createServer(handleRequest).listen(5000)
