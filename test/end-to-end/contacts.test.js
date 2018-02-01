const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
const baseUrl = 'http://localhost:3000'
chai.use(chaiHttp)

describe('GET /contacts/new', function () {
  it('correctly renders page', function () {
    return chai.request(baseUrl)
      .get('/contacts/new')
      .then(function (res) {
        expect(res).to.be.html
        expect(res).to.have.status(200)
        expect(res.text).to.include('<form method="post" action="/contacts" class="new-contact-form">')
      })
  })
})
