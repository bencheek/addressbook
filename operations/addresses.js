'use strict'

const addressRepository = require('../repositories/addresses')
const errors = require('../utils/errors')

function list(userId) {
  return addressRepository.findAll(userId)
}

function create(address, userId) {

  if (typeof userId === "undefined") {
    throw new errors.UserNotFoundError()
  }
  return addressRepository.create(address, userId)
}

function read(userId, key) {
  return addressRepository.findById(userId, key)
}

function update(userId, key, newAddressVersion) {
  return addressRepository.update(userId, key, newAddressVersion)
}

function remove(userId, addressKey) {
  return addressRepository.remove(userId, addressKey)
}

module.exports = {
  list,
  create,
  read,
  update,
  remove,
}
