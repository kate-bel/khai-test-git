const http = require('http');
const port = 3000; // ����, �� ����� ���� ��������� ������
// ��������� HTTP-�������
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // ����������� �� ������ ���� HTML ��� ������� ���� ���������
    const url = req.url;
    if (url === '/about') {
        res.write('<h1>about us page<h1>'); //write a response
        res.end(); //end the response
    } else if (url === '/contact') {
        res.write('<h1>contact us page<h1>'); //write a response
        res.end(); //end the response
    } else {
        res.write('<h1>Hello World!<h1>'); //write a response
        res.write('<h2>My name Kateryna<h2>'); //write a response
        res.end(); //end the response
    }
});
// ��������������� ����� �� ������ �������
server.listen(port, () => {
    console.log(`server start at http://localhost:${port}/`);
});