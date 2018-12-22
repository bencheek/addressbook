'use strict'

const request = require('supertest-koa-agent')
const { expect, assert } = require('chai')
const Chance = require('chance')
const app = require('../../../app')
const { resetDb } = require('../../helpers')
const addressesRepository = require('../../../repositories/addresses')

describe('Addresses', () => {
  beforeEach(resetDb)

  context('CRUD /addresses', () => {
    const chance = new Chance()

    const addressData = {
      firstName: chance.name(),
      lastName: chance.name(),
      email: chance.email(),
    }

    const updatedAddressData = {
      ...addressData,
      firstName: `${addressData.firstName}2`,
      lastName: `${addressData.lastName}2`,
      email: `${addressData.email}2`,
    }

    let userToken
    let userId
    let existingAddressKey

    beforeEach(async () => {
      const res = await request(app)
        .post('/users')
        .send({
          email: chance.email({ domain: 'sfs.cz' }),
          name: chance.name(),
          password: '11111111',
        })
        .expect(201)

      userToken = res.body.accessToken
      userId = res.body.id

      const address = await addressesRepository.create(addressData, userId)
      existingAddressKey = address.key
    })

    it('reads all existing addresses', async () => {
      await request(app)
        .get('/addresses')
        .set('Authorization', `${userToken}`)
        .expect(200)
    })

    it('reads address by key', async () => {
      const res = await request(app)
        .get(`/addresses/${existingAddressKey}`)
        .set('Authorization', `${userToken}`)
        .expect(200)

      expect(res.body).to.deep.include({
        ...addressData,
      })
    })

    it('updates an address', async () => {
      const updatedAddress = {
        ...updatedAddressData,
      }

      const res = await request(app)
        .put(`/addresses/${existingAddressKey}`)
        .set('Authorization', `${userToken}`)
        .send(updatedAddress)
        .expect(200)

      expect(res.body).to.deep.include({
        ...updatedAddress,
      })
    })


    it('deletes an address', async () => {
      await request(app)
        .delete(`/addresses/${existingAddressKey}`)
        .set('Authorization', `${userToken}`)
        .expect(200)

      await request(app)
        .get(`/addresses/${existingAddressKey}`)
        .set('Authorization', `${userToken}`)
        .expect(404)
    })


    it('saves a new address', async () => {
      const res = await request(app)
        .post('/addresses')
        .set('Authorization', `${userToken}`)
        .send(addressData)
        .expect(201)

      expect(res.body).to.deep.include({
        ...addressData,
      })
    })
  })
})
