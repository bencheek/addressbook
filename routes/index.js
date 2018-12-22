'use strict'

const Router = require('koa-router')
const { handleErrors, handleNotFound } = require('../middleware/errors')
const users = require('../controllers/users')
const addressesController = require('./../controllers/addresses')
const { authenticate } = require('./../middleware/authentication')

const router = new Router()

router.use(handleErrors)

router.post('/users', users.signUp)
router.post('/sessions/user', users.signIn)

router
  .get('/addresses', authenticate, addressesController.list)
  .get('/addresses/:key', authenticate, addressesController.read)
  .post('/addresses', authenticate, addressesController.create)
  .put('/addresses/:key', authenticate, addressesController.update)
  .delete('/addresses/:key', authenticate, addressesController.remove)

router.use(handleNotFound)

module.exports = router.routes()

