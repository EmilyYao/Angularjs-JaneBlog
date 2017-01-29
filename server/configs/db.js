import mongoose from 'mongoose';
import environment from './environment';

const dbURI = 'mongodb://localhost/angular-janeblog';


mongoose.connect(dbURI);

//connect events
//when successfully connected

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

//if the connection throws an error

mongoose.connection.on('error', err => {
    console.log('Mongoose default connection disconnected');
});

//if the node process ends, close the Mongoose connection

process.on('SIGINT', () => {
    mongoose.connection.close(()=>{
      console.log('Mongoose default connection disconnected through app termiation');
      process.exit(0);
    });
});

// bring in your schemas&models
// require('../model/user');

if (environment.seedDB) {
	require ('./seed');
}

