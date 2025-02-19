import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if(req.url==='/home'){
        res.end('Welcome to Home Page!');
    }else if(req.url==='/about'){
        res.end('This is About Page!');
    }
    else{
        res.end('404 Not Found');
    }
}
);

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})