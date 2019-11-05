const googleSearch = require('./script');


dbMock = [
    'dog.com',
    'chessepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('Silly tests', () => {
    it('This is a silly test', () => {
        expect('hello').toBe('hello');
    })
    it('This is another silly test', () => {
        expect(1).toBe(1);
    })
})


describe('GoogleSearch', () => {
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
    })

    it('Work with undefined and null inputs', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })

    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
