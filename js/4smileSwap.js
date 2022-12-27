let smileArr = [':)', '=)', ':)', '=)', ':)', '=)'];
let oldSmile = '';
let newSmile = '';
let counter = 0;

function smileSwap(argument, oldSmale, newSmile) {
    for (let i = 0; i < argument.length; i++) {
        if (argument[i] == oldSmale) {
            argument[i] = newSmile;
            counter++;
        }
    }
    return argument;
}
console.log(`Массив до заміни смайла: ${smileArr}`);

// if (counter == 0) { console.log(`Жодний елемент массиву не було змінено: ${smileArr}`) }
// else {
oldSmile = prompt("Введіть смайл, який требы замінити");
newSmile = prompt("Введіть новий смайл, що треба вставити в массив");
console.log(`Массив після заміни смайла ( ${oldSmile} на ${newSmile} ) має наступний вигляд: ${smileSwap(smileArr, oldSmile, newSmile)}`)
// };