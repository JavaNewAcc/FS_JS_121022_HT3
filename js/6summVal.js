let userArrLength = 0;
let userArr = [];
let summ = 0;

function summCalculator(argument) {
    for (let i = 0; i < argument.length; i++) {
        summ += argument[i];
    }
    return summ;
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
        console.log(`Сумма всіх елементів массива: ${summCalculator(userArr)} `);
    }
}
