// node.js crash course by traversy
//creating a server object

// const http = require('http');

// http.createServer((req, res) => {
//     //write response                     it works
//     res.write('Hello World');
//     res.end()
// }). listen(5000, () => console.log('server running...'));

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {' Content-Type': 'text/html'});
        res.end('<h1>how can i change text (edited)</h1>');
    }
    //console.log(req.url);
});

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

