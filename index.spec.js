describe('max product', () => {
    const maxProduct = require('./index.js');

    describe('when array is null', function () {
        const array = null;
        it('should throw an error', function () {
            expect(() => maxProduct(array)).toThrow('Null pointer exception.');
        });
    });

    describe('when array is empty', function () {
        const array = [];
        it('should throw an error', function () {
            expect(() => maxProduct(array)).toThrow('Array\'s length is smaller than 3.');
        });
    });

    describe('when array\'s length is less than 3', function () {
        const array = [1, 2];
        it('should throw error', function () {
            expect(() => maxProduct(array)).toThrow('Array\'s length is smaller than 3.');
        });
    });

    describe('when array\'s length is bigger than 3', function () {
        const array = [1, 10, 2, 6, 5, 3];
        it('should return highest product between 3 numbers from the array', ()=>{
            expect(maxProduct(array)).toEqual(10*6*5);
        });
    });

    describe('when array contains negative numbers', function () {
        const array = [-10, 2, -3, -3, 1, 10, 2, 9, 5, 3]
        it('should return highest product between 3 numbers from the array', ()=>{
            expect(maxProduct(array)).toEqual(10 *9*5);
        });
    });
});