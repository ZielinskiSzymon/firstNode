const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Witaj na stronie głównej.")
        res.end();
    }
    else if(req.url === "/contact"){
        res.write("Witaj na stronie koktaktowej.")
        res.end();
    }
    else{
        res.write("404 - PAGE NOT FOUND")
        res.end();
    }
});

server.listen(3000,"127.0.0.1", ()=>{
    console.log("server dziala!!!")
})