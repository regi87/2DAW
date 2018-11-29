let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(average(array));

function average(dataArray) {
    if (dataArray.length > 0) {
        let total = 0;
        for (const object of dataArray) {
            total += object;
        }
        return total / dataArray.length;
    } else
        return undefined;
}