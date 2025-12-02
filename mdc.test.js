const {divisao} = require('./Homework/mdc')
const {quebrado} = require('./Homework/mdc')
const {multiplicaçao} = require('./Homework/mdc')

describe('mdc', () => {
    it('divisao', () => {
        expect(divisao(32,48)).toBe(16,24)
        expect(divisao(16,24)).toBe(8,12)
        expect(divisao(8,12)).toBe(4,6)
        expect(divisao(4,6)).toBe(2,3)
        expect(divisao(2)).toBe(1)
        expect(quebrado(3)).toBe(1)
    });
    it('multiplicaçao', () => {
        expect(multiplicaçao(2)).toBe(4)
        expect(multiplicaçao(4)).toBe(8)
        expect(multiplicaçao(8)).toBe(16)
    });

});
