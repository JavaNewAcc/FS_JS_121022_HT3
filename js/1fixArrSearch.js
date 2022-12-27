let fixArr = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];
let newArr = [];

function evenNumFinder(argument) {
    for (let i = 0; i < argument.length; i++) {
        if (argument[i] % 2 == 0) {
            newArr.push(argument[i]);
        }
    }
    return newArr;
}

console.log(`Отримано новий массив довжиною ${evenNumFinder(fixArr).length}, з наступними елементами: ${evenNumFinder(fixArr)}`)