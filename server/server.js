import express from 'express';
import http from 'http';
import assert from 'assert';

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n')

}).listen(9000, 'localhost');

console.log('Server running at http://localhost:9000/')