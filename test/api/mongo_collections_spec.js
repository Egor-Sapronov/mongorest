var frisby = require('frisby');

frisby.create('Get collections names')
    .get('http://localhost:1337/api/collections')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        collections: Array
    })
    .toss();