const fs = require('fs')

require('dotenv').config()

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mariadb',
		timezone: '+07:00',
		dialectOptions: {
			useUTC: false
		}
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mariadb',
		timezone: '+07:00',
		dialectOptions: {
			useUTC: false
		}
	}
}
