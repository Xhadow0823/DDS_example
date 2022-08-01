// database 模型模組
const { Sequelize } = require('sequelize');  // 引入 sequelize 套件
const db = new Sequelize('sqlite::memory:'); // Example for sqlite



module.exports = db;