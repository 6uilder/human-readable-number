module.exports = function toReadable (number) {
  number = number + '';

  const units = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine'
  };

  const dozens = {
    '2' : 'twenty',
    '3' : 'thirty',
    '4' : 'forty',
    '5' : 'fifty',
    '6' : 'sixty',
    '7' : 'seventy',
    '8' : 'eighty',
    '9' : 'ninety'
  };

  const unusual = {
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety'
  }; 

  if (number.length === 1) {
    return units[number]
  } else if (number.length === 2) {
    if (number in unusual) {
      return unusual[number];
    } else return dozens[number[0]] + ' ' + units[number[1]];
  } else if (number.length === 3) {
    if (number[1] === '0') {
      if (number[2] === '0') {
        return units[number[0]] + ' hundred';
      }
      return units[number[0]] + ' hundred ' + units[number[2]]
    }
    let text = units[number[0]] + ' hundred ' + dozens[number[1]] + ' ' + units[number[2]];
    if (number.slice(-2) in unusual) {
      text = units[number[0]] + ' hundred ' + unusual[number.slice(-2)];
    } else if (text.endsWith('zero')) {
      text = units[number[0]] + ' hundred ' + dozens[number[1]];
    }
    return text;
  } else {
    return 'wrong input'
  }

}
