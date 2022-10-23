function checkPalindrome(str: string) {
  let checker: string = str.split('').reverse().join('');
  if (checker == str) {
    console.log(`${str} adalah polindrome`);
  } else {
    console.log(`${str} bukan polindrome`);
  }
}

checkPalindrome('eye');
checkPalindrome('Mata');
