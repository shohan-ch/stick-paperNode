const url = require ('url')

exports.home = (res)=>{
    res.end("Home Page");
}

exports.article  = (id,req, res)=>{
    console.log(id)
    // const myUrl = new URL(req.url,'http://localhost:5000')
    // console.log(myUrl);

    res.end(`<h1>Article Pagefsd</h1>`)
}