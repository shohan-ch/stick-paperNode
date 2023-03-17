const HomeController = require("../controllers/Home");

const routes = (req, res) =>{
    const{url} = req;

    if(url=="/"){
        const home  =  HomeController.home();
        res.end(home)
    
    }

    if(url=="/article")HomeController.article(req,res)

}
exports.routes =  routes