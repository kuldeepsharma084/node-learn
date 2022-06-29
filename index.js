const http = require('http');
const routes = require('./routes'); // custom route using dot
//const fs = require('fs');
console.log(routes.cust);
const server = http.createServer(routes.handler); // handler is define in route.js
server.listen('3001');
