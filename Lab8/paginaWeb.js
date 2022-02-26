
//fs: filesystem
const http = require('http'); 
const server = http.createServer( (request, response) => {

    console.log("Theres a visitor on your webpage");
    response.setHeader('Content-Type', 'text/html'); 

    const filesystem = require('fs'); //fs es el modulo

    const html = filesystem.readFileSync("index.html");

    response.write(html);

}); 


server.listen(3000);