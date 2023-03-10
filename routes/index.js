const Home = require("../controllers/Home");

const routes = (req, res) =>{
    const{url} = req;

    if(url=="/"){
        // const home  =  Home();
        
        res.end(Home())
       
        // res.end(
        //     `<h1> This home page </h1> 
        //     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, pariatur?</p>
        //     `
        // )
    }

}
exports.routes =  routes