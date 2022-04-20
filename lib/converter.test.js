const { convert, toMoney } = require('./converter');

test('Value converted by quotation', () => {
    expect(convert(3, 90)).toBe(270);
});

test('Convert the value to money', () => {
    expect(toMoney(convert(5, 10))).toBe('50.00')
})