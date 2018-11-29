
let array = [1,2,3,4,5];
ejercicio_5(array);

function ejercicio_5(dataArray)
{
    console.log(dataArray.map(f=>{if(f%2 !== 0){return f=f*f}else return f;}));
}