const expect = require('chai').expect
const db = require('../../../src/models/contacts')

describe('db function create', function () {
  it('should create a new row in the contacts table', function () {
    return db.create({ first_name: 'En', last_name:'Piem'})
      .then((contact) => {
        expect(contact[0].first_name).to.equal('En')
      })
  })
})
