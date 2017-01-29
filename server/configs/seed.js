import User from '../api/user/user.model';

User.find({}).removeAsync()
  .then(() => {
  	User.create({
  		username: 'Yao',
  		password: '12345',
  		email: 'yao@qq.com'
  	}, {
  		username: 'Jane',
  		password: '12345',
  		email: 'jane@qq.com'
  	}).then(() => {
  		console.log ('finish populating the user data');
  	});
  })