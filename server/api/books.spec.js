const {expect} = require('chai')
const request = require('supertest')
const app = require('../../server')

describe('/api/books/', () => {
  const bookData = {
    start: 0,
    num_found: 2,
    numFound: 2,
    docs: [
      {
        title_suggest: 'Hello, Bunnies',
        edition_key: ['OL12009357M'],
        cover_i: 3007879,
        isbn: ['1857248600', '9781857248609'],
        has_fulltext: false,
        text: [
          'OL12009357M',
          '1857248600',
          '9781857248609',
          'Andrew Langley',
          'John Collins (Illustrator)',
          '30036158',
          'OL226113A',
          'Hello, Bunnies',
          '/works/OL1888482W',
          "Reader's Digest Children's Books Ltd",
          'Hello, Bunnies (Window Story Books)'
        ],
        author_name: ['Andrew Langley'],
        seed: ['/books/OL12009357M', '/works/OL1888482W', '/authors/OL226113A'],
        oclc: ['30036158'],
        contributor: ['John Collins (Illustrator)'],
        author_key: ['OL226113A'],
        title: 'Hello, Bunnies',
        publish_date: ['May 1993'],
        type: 'work',
        ebook_count_i: 0,
        edition_count: 1,
        key: '/works/OL1888482W',
        publisher: ["Reader's Digest Children's Books Ltd"],
        last_modified_i: 1303854492,
        cover_edition_key: 'OL12009357M',
        publish_year: [1993],
        first_publish_year: 1993
      },
      {
        title_suggest: 'Hello, Bunnies! (Little Windows)',
        publisher: ["Reader's Digest Children's Books"],
        cover_i: 3007864,
        isbn: ['1857247167', '9781857247169'],
        has_fulltext: false,
        title: 'Hello, Bunnies! (Little Windows)',
        oclc: ['43865251'],
        last_modified_i: 1304015885,
        edition_count: 1,
        author_name: ['Andrew Langley'],
        cover_edition_key: 'OL12009297M',
        seed: [
          '/books/OL12009297M',
          '/works/OL15012341W',
          '/authors/OL226113A'
        ],
        first_publish_year: 1998,
        publish_year: [1998],
        key: '/works/OL15012341W',
        text: [
          'OL12009297M',
          '1857247167',
          '9781857247169',
          'Andrew Langley',
          '43865251',
          'OL226113A',
          'Hello, Bunnies! (Little Windows)',
          '/works/OL15012341W',
          "Reader's Digest Children's Books"
        ],
        publish_date: ['June 18, 1998'],
        edition_key: ['OL12009297M'],
        author_key: ['OL226113A'],
        type: 'work',
        ebook_count_i: 0
      }
    ]
  }

  it('POST /api/books', async () => {
    const res = await request(app)
      .post('/api/books')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({title: 'hello bunnies', author: 'andrew'})
      .expect(200)

    expect(res.body).to.be.an('object')
    //   expect(res.body).to.be.equal(bookData)
  })
}) // end describe('/api/users')
// end describe('User routes')
