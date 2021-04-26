const multiplesof3and5  =  require('./Multiplesof3and5')

describe ('tests for multiple of 3 and 5',() => {

    test('it should return a number',() => {
        expect(multiplesof3and5(10)).toEqual(expect.any(Number));
    })

    test('it should return a number',() => {
        expect(multiplesof3and5(49)).toEqual(543);
    })

    test('it should return a number',() => {
        expect(multiplesof3and5(1000)).toEqual(233168);
    })

    test('it should return a number',() => {
        expect(multiplesof3and5(8456)).toEqual(16687353);
    })

    test('it should return a number',() => {
        expect(multiplesof3and5(19564)).toEqual(89301183);
    })

})