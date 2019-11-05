const fetch = require('node-fetch');
const swapi = require('./script2');


it('calls swapi to get people', () => {
    return swapi.getPeopleAsync(fetch).then(data => {
        expect.assertions(1)
        expect(data.count).toEqual(87);

    })
})

it('calls swapi to get people', () => {
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})