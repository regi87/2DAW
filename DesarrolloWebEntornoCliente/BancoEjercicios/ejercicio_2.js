
let dataArray = [1,2,3];

linearSearch(1, dataArray);
function linearSearch(x, dataArray)
{
    let result = dataArray.some(f=> {if(x === f){return  true} else return false});
    console.log(result);
}