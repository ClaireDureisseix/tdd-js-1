// capitalizeFirstLetters.js
function capitalizeFirstLetters(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    (i === 0 || input[i - 1] === ' ')
    ? output += input[i].toUpperCase()
    : output += input[i];
  }
  return output;
}

module.exports = capitalizeFirstLetters;