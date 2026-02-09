import http from 'http';
import * as url from "url";

const server = http.createServer((req, res) => {
    console.log('Request Headers:', req.headers);

  const userAgent = req.headers['user-agent'];
  const acceptLanguage = req.headers['accept-language'];

  const {url,method}=req;

  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>Accept-Language: ${acceptLanguage}</h1>
    <h3>User-Agent: ${userAgent}\n</h3>
    
    <p>Get the URL and HTTP method: <small>You made a ${method} request to http://localhost:3000${url}</small></p>
    `);
});

server.listen(3000);
export default server;