
let array = [15,2,30,5];

multiplo(array);

function multiplo(dataArray)
{
   console.log(dataArray.filter(f=> {return f%15 === 0}));
}