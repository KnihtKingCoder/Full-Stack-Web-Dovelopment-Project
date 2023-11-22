//1 way
 const http=require('http')

 const server=http.createServer((req,resp)=>{
    resp.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>")
    resp.end();

 })

 server.listen(4005);
 console.log("Server Running at Port : 4005");

















//2 Way
/*
const http=require('http')

const Port=4505;
const hostname="localhost";

const server=http.createServer((req,resp)=>{
    resp.statusCode=200;
    resp.setHeader("Content-Type","text/plain");
    resp.end("I Am Happy To Learn Full Stack Web Development From PW Skills!")
})

server.listen(Port,()=>{
    console.log(`Server running at ${hostname}:${Port}`);
})
*/