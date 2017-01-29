var mongoose = require('bluebird').promisifyAll(require('mongoose'));

const Schema = mongoose.Schema;


const userSchema = new Schema ({
	username: String,
	password: String,
	email: String

});

// the schema is useless so far
// we need to create a model using it
export default mongoose.model('User', userSchema);



