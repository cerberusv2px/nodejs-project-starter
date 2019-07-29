import Router from 'express';

let router = Router();

router.get('/', function(req, res, next) {
  res.send('<h1>R-Score</h1>');
});

module.exports = router;
