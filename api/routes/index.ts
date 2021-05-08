import express from 'express';
const botCtrl = require('../controllers/botController');

export default function (app: express.Application) {
	app.route('/bot')
		.post(botCtrl.bot);
};
