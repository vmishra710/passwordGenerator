const characters = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*()_+-=[]{}"|/?<>*'
};

const generatePassword = (e) => {
    let length = document.getElementById('length').value;

    let mixed = document.getElementById('mixed').checked;
    let upperCase = document.getElementById('upperCase').checked;
    let lowerCase = document.getElementById('lowerCase').checked;
    let includeNumbers = document.getElementById('includeNumbers').checked;
    let includeNonLetters = document.getElementById('includeNonLetters').checked;

    let passwordCharacters = '';

    if(mixed)passwordCharacters += characters.upper + characters.lower;
    if(upperCase)passwordCharacters += characters.upper;
    if(lowerCase)passwordCharacters += characters.lower;
    if(includeNumbers)passwordCharacters += characters.number;
    if(includeNonLetters)passwordCharacters += characters.symbol;

    let password = '';

    for(let i = 0 ; i < length ; i++){
        password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    document.getElementById('passwordOutput').innerText = password;
}

document.getElementsByTagName('button')[0].addEventListener("click", generatePassword);