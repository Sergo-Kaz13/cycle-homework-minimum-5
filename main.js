'use strict'

// ? Запитай у користувача число і виведи всі дільники цього числа.

let start = true;
let userNumbers = [];
while (start) {
    let userNum = prompt('Введи число', '');

    if (userNum === null) {
        start = false;
    } else if (+userNum !== +userNum || +userNum <= 0) {
        alert('Введи число більше 0');
    } else {
        let a = 0;
        for (let i = 0; i <= userNum; i++) {
            if (userNum % i === 0) {
                userNumbers[a] = i;
                a++;
            }
        }
        alert(userNumbers);
        start = false;
    }
}