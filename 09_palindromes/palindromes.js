const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const clearedString = string
    .toLowerCase()
    .split("")
    .filter((character) => { return alphanumerical.includes(character)})
     .join("")
    ;

  const reversedString = clearedString.split('').reverse().join('');
  return clearedString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
