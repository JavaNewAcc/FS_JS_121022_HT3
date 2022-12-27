let userArrLength = 0;
let userArr = [];
let newArr = [];

function evenNumFinder(argument) {
    for (let i = 0; i < argument.length; i++) {
        if (argument[i] > 0 && argument[i] % 2 == 0) {
            newArr.push(argument[i]);
        }
    }
    return newArr;
}

while (userArrLength != userArrLength || userArrLength <= 0) {
    userArrLength = parseInt(prompt("Введіть довжину массиву"));

    if (userArrLength <= 0 || userArrLength != userArrLength) {
        alert("Довжна массиву має бути числом, більшим за 0. Спробуйте ще раз")
    }

    else {
        for (let i = 0; i < userArrLength; i++) {
            userArr.push(parseInt(Math.random() * 10));
        }
        console.log(`Створений масив (довжиною ${userArr.length}) випадкових чисел: ${userArr}`)
        console.log(`Відібрані парні числа: ${evenNumFinder(userArr)}`)
    }
}
