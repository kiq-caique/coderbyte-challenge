// Have the function CodelandUsernameValidation(str) take the str parameter being passed and
// determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

function CodelandUsernameValidation(str) {
  let len = str.length;
  let firstChar = str.charAt(0);
  let lastChar = str.charAt(len - 1);
  // (len >= 4 && len <= 25) Limita a variável len a ter mais de 4 e menos de 25 caracteres
  // (firstChar.match(/[a-z]/i)) Verifica se o primeiro caractere começa com uma letra entre a-z
  // (firstChar.match("^[A-Za-z0-9_]/*$") Verifica se os caractere de str contem apenas letras, numeros e _ 'Aa-Zz' '0-9' '_'
  // (!lastChar.match(/_/i) Verifica se a o ultimo caractere é um '_'
  if (
    len >= 4 &&
    len <= 25 &&
    firstChar.match(/[a-z]/i) &&
    firstChar.match("^[A-Za-z0-9_]/*$") &&
    !lastChar.match(/_/i)
  ) {
    str = true;
  } else {
    str = false;
  }

  return str;
}

// keep this function call here
console.log(CodelandUsernameValidation(readline()));
