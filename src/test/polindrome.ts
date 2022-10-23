function checkPolindrome(str: string) {
  let checker: string = str.split('').reverse().join('');
  if (checker == str) {
    console.log(`${str} adalah polindrome`);
  } else {
    console.log(`${str} bukan polindrome`);
  }
}

checkPolindrome('eye');
checkPolindrome('Mata');
