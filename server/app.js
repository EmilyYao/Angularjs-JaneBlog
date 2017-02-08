import express from 'express';
import environment from './configs/environment';
import http from 'http';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/')));

const server = http.createServer(app);

server.listen(environment.port, (err) => {
  if (err) throw err;

 console.log(`Application is running on ${environment.port}`);
});

app.route('/')
    .get((req, res) => {
    	res.sendFile(path.join(`${__dirname}/../client/index.html`));
    })

app.get('/', (req, res) => {
	res.status(200).json('my name is yao ji');
});

app.get('/user', (req,res) => {
    
})

require('./configs/db');

