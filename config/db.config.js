const fs = require('fs')

require('dotenv').config()

module.exports = {
  development: {
    username: 'sigma_chat',
    password: 'sigma_chat',
    database: 'sigma_chat',
    host: '54.251.176.121',
    dialect: 'mariadb',
    timezone: '+07:00',
    dialectOptions: {
      useUTC: false
    }
  },
  production: {
    username: process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASS,
    database: 'sigma_chat',
    host: process.env.DB_PROD_HOST,
    dialect: 'mariadb',
    timezone: '+07:00',
    dialectOptions: {
      useUTC: false
    }
  }
}
