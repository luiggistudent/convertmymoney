const convert = (quotation, quantity) => quotation * quantity;
const toMoney = value => value.toFixed(2);

module.exports = {
    convert,
    toMoney
}