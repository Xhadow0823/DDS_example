const Router = require('express').Router;
const router = new Router();

const db = require('../models/db');
const DDSInfo = require('../models/DDSInfo');

router.get('/', (req, res) => {
  db.sync().then(() => {
    DDSInfo.findAll().then(all => {
      res.send(all[0].status);
    });
  });
});

router.post('/set/:status', (req, res) => {
  db.sync().then(() => {
    DDSInfo.findAll().then(all => {
      all[0].set('status', req.params.status);
      all[0].save();
      res.send('OK');
    });
  });
});

module.exports = router;