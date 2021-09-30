const { Router } = require('express');
const { User } = require('./User.entity');

/**
 * # UserRouter '/backend/user'
 *
 * Controls all user api
 * - route '/':
 * 	- get: returns all users
 * 	- post: creates a new user
 * - route '/:id'
 *  - get: get the user by id
 * 	- patch: update user by id
 *  - delete: delete a user by id
 */
const UserRouter = Router('/user');

UserRouter.route('/')
	.get(async (req, res) => {
		const users = await User.findAll();
		res.json(users);
	})
	.post(async (req, res) => {
		let user = await User.create(req.body);
		res.json(user);
	});

UserRouter.route('/:id')
	.get(async (req, res) => {
		let user = await User.findByPk(req.params.id);
		res.json(user);
	})
	.patch(async (req, res) => {
		User.update(req.body, { where: { id: req.params.id } });
	})
	.delete(async (req, res) => {
		User.destroy({ where: { id: req.params.id } });
	});

module.exports = {
	UserRouter,
};
