'use strict'


const { firebaseDb } = require('../config')

/**
 * Returns all records
 * @param {Number} userId userId to load addresses for
 * @returns {Promisse<Array>}
 */
function findAll(userId) {
  return firebaseDb.ref(`addressBook/users/${userId}`).orderByKey().once('value')
}

/**
 * Return record by key
 * @param {Number} userId userId to load addresses for
 * @param {String} key address key
 * @return {Promise<Address>}
 */
function findById(userId, key) {
  return firebaseDb.ref(`addressBook/users/${userId}`).orderByKey().equalTo(key)
    .once('value')
}

/**
 * Create record
 * @param {Object} address Address object
 * @param {Number} userId userId to load addresses for
 * @return {Promise<Address>}
 */
function create(address, userId) {
  const addressesRef = firebaseDb.ref(`addressBook/users/${userId}`)
  return addressesRef.push(address)
}

/**
 * Delete record by id
 * @param {Number} userId userId to load addresses for
 * @param {String} key address key
 * @return {Promise<void>} number of deleted records
 */
function remove(userId, key) {
  const addressesRef = firebaseDb.ref(`addressBook/users/${userId}`)
  return addressesRef.child(key).remove()
}

/**
 * Update a record
 * @param {Number} userId userId to load addresses for
 * @param {String} key address key
 * @param {Object} newAddressVersion new version of Address
 * @return {Promise<Address>} resulting address
 */
function update(userId, key, newAddressVersion) {
  const addressesRef = firebaseDb.ref(`addressBook/users/${userId}`)
  return addressesRef.child(key).update(newAddressVersion)
}

module.exports = {
  findAll,
  findById,
  create,
  remove,
  update,
}
