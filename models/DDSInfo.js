// DDSInfo 資料表模型模組
const Sequelize = require('sequelize');
const db = require('./db');


// Active, Negative
const DDSInfo = db.define('DDSInfo', {  // 資料表名稱
  status: {  // 欄位名稱
    type: Sequelize.STRING,  //  資料型態
    allowNull: false,  // 能不能為空，預設是 true
    defaultValue: "Negative",  // 預設值
  }
}, {
  // Other model options go here
});

// *************初始化DDSInfo資料表************
db.sync().then(() => {
  DDSInfo.create({
    status: "Negative"
  });
});
// ********************************************

module.exports = DDSInfo;