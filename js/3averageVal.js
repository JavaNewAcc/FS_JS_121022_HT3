let userArrLength = 0;
let userArr = [];
let summ = 0;
let averageVal = 0;

function avgValCalculator(argument) {
    for (let i = 0; i < argument.length; i++) {
        summ += argument[i];
    }
    averageVal = summ / argument.length;
    return averageVal;
}

while (userArrLength != userArrLength || userArrLength <= 0) {
    userArrLength = parseInt(prompt("Введіть довжину массиву"));

    if (userArrLength <= 0 || userArrLength != userArrLength) {
        alert("Довжна массиву має бути числом, быльшим за 0. Спробуйте ще раз")
    }

    else {
        for (let i = 0; i < userArrLength; i++) {
            userArr.push(parseInt(Math.random() * 10));
        }
        console.log(`Створений масив (довжиною ${userArr.length}) випадкових чисел: ${userArr}`);
        console.log(`Середнє арифметичне всіх елементів массива: ${avgValCalculator(userArr)} `);
    }
}
