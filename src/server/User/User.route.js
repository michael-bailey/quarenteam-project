const { Router } = require('express');
const { User } = require('./User.entity');

const UserRouter = Router('/user');

UserRouter.route('/')
	.get(async (req, res) => {
		const users = await User.findAll();
		res.json(users);
	})
	.post(async (req, res) => {
		let user = await User.create({
			username: 'michael',
			email: 'email@noreply.com',
		});
		res.json(user);
	});

UserRouter.route('/:id').get((req, res) => {
	res.send('this is the id');
});

module.exports = {
	UserRouter,
};
