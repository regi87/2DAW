let dataArray = [-9, 1, 2, 3];
getMaxium(dataArray);

function getMaxium(dataArray) {
    console.log(dataArray.reduce(operation, 0));
}
function operation(a, b) {
    if (a > b)
        return a;
    else
        return b;
}