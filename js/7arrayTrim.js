let userArrLength = 0;
let userArr = [];
let newUserArr = [];
let startPosition = -1;
let endPosition = -2;

while (userArrLength != userArrLength || userArrLength <= 0) {
    userArrLength = parseInt(prompt("Введіть довжину массиву"));

    if (userArrLength <= 0 || userArrLength != userArrLength) {
        alert("Довжна массиву має бути числом, быльшим за 0. Спробуйте ще раз")
    }

    else {
        for (let i = 0; i < userArrLength; i++) {
            userArr.push(parseInt(Math.random() * 10));
        }
        console.log(`Створений массив (довжиною ${userArr.length}) випадкових чисел: ${userArr}`);
    }
}

while (startPosition < 0) {
    startPosition = parseInt(prompt("Введіть індекс стартової позиції"));
    if (startPosition < 0) { alert(`Індекс стартової позиції не може бути менше за 0. Спробуйте ще раз.`) }
    else if (startPosition != startPosition) { alert(`Введіть цифрове значення індексу стартової позиції.`) }
    else { break }
}

while (endPosition <= startPosition) {
    endPosition = parseInt(prompt("Введіть індекс кінцевої позиції"));
    if (endPosition < 0) { alert(`Індекс кінцевої позиції не може бути менше за 0. Спробуйте ще раз.`) }
    else if (endPosition <= startPosition) { alert(`Індекс кінцевої позиції не може бути менше за індекс початкової позиції. Спробуйте ще раз.`) }
    else if (endPosition != endPosition) { alert(`Введіть цифрове значення індексу кінцевої позиції.`) }
    else { break }
}

function arrSlice(userArr, startPosition, endPosition) {
    newUserArr = userArr.slice(startPosition, endPosition);
    return newUserArr;
}

arrSlice(userArr, startPosition, endPosition);

console.log(`Користувач хоче зберегти елементи массиву з ${startPosition} до ${endPosition-1} (включно).`);
console.log(`Збережені елементи: ${newUserArr}`);