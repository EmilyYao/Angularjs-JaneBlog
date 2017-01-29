import express from 'express';
import environment from './configs/environment';
import http from 'http';

const app = express();

const server = http.createServer(app);

server.listen(environment.port, (err) => {
  if (err) throw err;

 console.log(`Application is running on ${environment.port}`);
});

app.get('/', (req, res) => {
	res.status(200).json('my name is yao ji');
});


require('./configs/db');