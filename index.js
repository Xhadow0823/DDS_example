// 系統由此檔案開始執行
const express = require('express');  // https://www.npmjs.com/package/express

const dotenv = require('dotenv');  // https://www.npmjs.com/package/dotenv
dotenv.config();

const app = express();
const port = process.env.PORT;

const api = require('./routes/api');

app.use('/api', api);

app.use(express.static('statics'));  // 指定靜態檔案路徑 // https://expressjs.com/zh-tw/starter/static-files.html

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});