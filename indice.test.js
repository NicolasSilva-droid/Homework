const {numeros} = require('./Homework/indice')

describe('indice', () => {
    it('posição do indice', () => {
        expect(numeros([4])).toBe(12)
        expect(numeros([1])).toBe(2)
    });

});
