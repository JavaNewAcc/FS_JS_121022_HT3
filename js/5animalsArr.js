let userArr = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let newArr = [];
let keyWord = '';
let userArrLength = 0;

function elementSearch(userArr, keyWord) {
    if (keyWord == "first" || keyWord == "First" || keyWord == "FIRST") {
        newArr[0] = userArr[0];
        userArr.shift();
    }
    else if (keyWord == "last" || keyWord == "Last" || keyWord == "LAST") {
        newArr[0] = userArr[userArr.length - 1];
        userArr.pop();
    }
    else {
        alert("Введено невірне ключове слово. Спробуйте ще раз.");
    }

    return { userArr, newArr }
}

elementSearch(userArr, keyWord = prompt("Введіть ключове слово"));
console.log(`Масив після видалення ${keyWord} елементу: ${userArr}`);
console.log(`Перенесене значення: ${newArr}`);