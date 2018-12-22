'use strict'


const { firebaseDb } = require('../config')


/**
 * Returns all records
 * @returns {Promisse<Array>}
 */
function findAll(userId) {
  return firebaseDb.ref(`addressBook/users/${userId}`).orderByKey().once('value')
}

/**
 * Return record by id
 * @param {Number} id record id
 * @return {Promise<Address>}
 */
function findById(userId, key) {
  return firebaseDb.ref(`addressBook/users/${userId}`).orderByKey().equalTo(key)
    .once('value')
}

/**
 * Create record
 * @param {Object} address Dog object
 * @return {Promise<Address>}
 */
function create(address, userId) {
  const addressesRef = firebaseDb.ref(`addressBook/users/${userId}`)
  return addressesRef.push(address)
}

/**
 * Delete record by id
 * @param {String} key key of record to delete
 * @return {Promise<void>} number of deleted records
 */
function remove(userId, key) {
  const addressesRef = firebaseDb.ref(`addressBook/users/${userId}`)
  return addressesRef.child(key).remove()
}

/**
 * Update a dog record
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
