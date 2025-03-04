import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url || '/';

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1>');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About</h1>');
    } else if (url === '/my-account') {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('You have no access to this page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});