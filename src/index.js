module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return 'zero';

    let result = '';

    let hundreds = Math.floor(number / 100);
    let remainder = number % 100;

    if (hundreds > 0) {
        result += units[hundreds] + ' hundred';
        if (remainder > 0) result += ' ';
    }

    if (remainder < 10 && remainder > 0) {
        result += units[remainder];
    } else if (remainder >= 10 && remainder < 20) {
        result += teens[remainder - 10];
    } else if (remainder >= 20) {
        result += tens[Math.floor(remainder / 10)];
        if (remainder % 10 > 0) {
            result += ' ' + units[remainder % 10];
        }
    }
    return result;
}