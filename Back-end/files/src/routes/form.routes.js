const router = require('express-promise-router')();
const formController = require('../controllers/mail')

router.get('/', (req, res) => {
    res.status(200).send('backend Trainee');
  });

router.post('/sendMail', formController.sendMail)

module.exports = router;