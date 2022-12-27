let counter = 0;
let userArr = [];

while (counter < 5) {
    userArr[counter] = prompt(`Внесіть данні, що буде збережено в масиві (${counter+1} з 5)`)
    counter++;
}

console.log(`Збережено наступний массив: ${userArr}`)