const router = require('express').Router();
const histories = require('./histories.ctrl');

router.post('/', histories.write);
router.get('/', histories.list);

module.exports = router;
