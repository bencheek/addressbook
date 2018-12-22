'use strict'

const log = require('../utils/logger')
const validator = require('../validations/validator')
const addressesOperations = require('../operations/addresses')
const schema = require('../validations/schema/address')
const errors = require('../utils/errors')


async function list(ctx) {
  const addresses = await addressesOperations.list(parseInt(ctx.state.user.id))
  ctx.body = addresses.val()
  ctx.status = 200
}

async function read(ctx) {
  const addressKey = ctx.params.key
  const address = await addressesOperations.read(parseInt(ctx.state.user.id), addressKey)
  const addressValue = address.val()

  if (!addressValue) {
    throw new errors.NotFoundError()
  }
  ctx.body = addressValue[addressKey]
  ctx.set('Location', ctx.request.URL)
  ctx.status = 200
}

async function create(ctx) {

  const newAddress = {
    email: ctx.request.body.email,
    firstName: ctx.request.body.firstName,
    lastName: ctx.request.body.lastName,
  }

  const userId = parseInt(ctx.state.user.id)

  validator.validate(schema.addressSchema, newAddress)

  const address = await addressesOperations.create(newAddress, userId)
  const addressFromDb = await addressesOperations.read(userId, address.key)

  ctx.body = addressFromDb.val()[address.key]
  ctx.status = 201
  ctx.set('Location', `${ctx.request.URL}/${address.key}`)
  log.info({ key: address.key }, 'Address created')
}

async function update(ctx) {
  const newAddressVersion = {
    email: ctx.request.body.email,
    firstName: ctx.request.body.firstName,
    lastName: ctx.request.body.lastName,
  }

  const userId = parseInt(ctx.state.user.id)
  const addressKey = ctx.params.key

  validator.validate(schema.addressSchema, newAddressVersion)

  await addressesOperations.update(userId, addressKey, newAddressVersion)
  const addressFromDb = await addressesOperations.read(userId, addressKey)
  ctx.status = 200
  ctx.set('Location', ctx.request.URL)
  ctx.body = addressFromDb.val()[addressKey]
}

async function remove(ctx) {

  await addressesOperations.remove(parseInt(ctx.state.user.id), ctx.params.key)
  ctx.status = 200
}


module.exports = {
  list,
  read,
  create,
  update,
  remove,
}

