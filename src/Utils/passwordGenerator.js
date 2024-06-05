// passwordOptions contains all necessary string data needed to generate the password
const passwordOptions = {
  num: '1234567890',
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}

let getRandomChar = function (fromString) {
  return fromString[Math.floor(Math.random() * fromString.length)]
}

//
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  }
}

export const generatePassword = () => {
  const passChars = []

  let passInfo =
    passwordOptions.num +
    passwordOptions.specialChar +
    passwordOptions.lowerCase +
    passwordOptions.upperCase

  // one uppercase, lowercase, digit and special Character
  passChars.push(getRandomChar(passwordOptions.num))
  passChars.push(getRandomChar(passwordOptions.specialChar))
  passChars.push(getRandomChar(passwordOptions.lowerCase))
  passChars.push(getRandomChar(passwordOptions.upperCase))

  // password of 12 length
  while (passChars.length < 12) {
    passChars.push(getRandomChar(passInfo))
  }

  console.log(passChars.join(''))

  shuffleArray(passChars)
  console.log(passChars.join(''))

  return passChars.join('')
}
