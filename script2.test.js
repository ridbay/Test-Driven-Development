const fetch = require('node-fetch');
const swapi = require('./script2');


it('calls swapi to get people', (done)=>{
    swapi.getPeopleAsync(fetch).then(data => {
        expect.assertions(1)
        expect(data.count).toEqual(87);
        done();
    })
})

it('calls swapi to get people', ()=>{
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})