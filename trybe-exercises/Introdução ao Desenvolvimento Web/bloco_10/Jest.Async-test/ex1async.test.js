const uppercase = require('../Jest.Async/ex1async')


test('callback returns uppercase', (done) => {
    (uppercase('junin', (element) => {
        expect(element).toBe('JUNIN');
        done()
    }));
});