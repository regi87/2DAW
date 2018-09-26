
function par(x){
    return x%2 == 0;
}
function suma(a,b){
    return a+b;
}

function actividad_3(array_1)
{
    let newArray = array_1.filter(par);
    newArray=newArray.reduce(suma,0);
    console.log(newArray);
}

let arrayParam=[1,2,3,4,5,6,7];
actividad_3(arrayParam)