'use strict'

const addressSchema = {
  type: 'Object',
  required: true,
  properties: {
    email: { type: 'string', required: true, maxLength: 80 },
    firstName: { type: 'string', required: true, maxLength: 80 },
    lastName: { type: 'string', required: true, maxLength: 80 },
  },
}

module.exports = {
  addressSchema,
}
