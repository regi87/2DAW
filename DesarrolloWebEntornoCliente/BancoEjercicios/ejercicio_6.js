
let array = [1,2,3,4,5];
everyElementGreaterThan(0, array);
function everyElementGreaterThan(x, dataArray)
{
    console.log(dataArray.every(f=> {if(f > x) {return true;} else {return false;} }));
}