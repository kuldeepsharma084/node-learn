const fs = require('fs');
const reqesthandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Test</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(body);
      console.log(parseBody);
      const name = parseBody.split('=')[1];
      console.log(name);
      fs.writeFileSync('abc.txt', name);
      //res.setHeader('Location', '/');
    });
  }
};
module.exports = { handler: reqesthandler, cust: 'test' };
