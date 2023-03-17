const HomeController = require("../controllers/Home");

const routes = (req, res) =>{
  const{url} = req;
  const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`); // Extract the pathname and query parameters
   if(url=="/")HomeController.home(res)

  if (pathname === '/article') {
    // console.log(searchParams)
    const id = searchParams.get('id'); // Extract the id parameter
    HomeController.article(id, req, res); // Call the article controller with the id parameter
  } else{
    res.end('No page found')
  }

}
exports.routes =  routes