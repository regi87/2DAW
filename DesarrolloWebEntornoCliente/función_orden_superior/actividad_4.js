let arrayCalc = [1,2,3,4,5,6,7];

function mediaGradual(a,b){
    return (a+b)/arrayCalc.length;
}

function suma(a,b){
    return (a+b);
}

let media = arrayCalc.reduce(mediaGradual,0);
console.log("Media");
console.log(media+'\n');

let resultado_1 = arrayCalc.map( x => (x - media)**2);
console.log("Resultado 1");
console.log(resultado_1+'\n');

let sumatorio = resultado_1.reduce(suma, 0)/arrayCalc.length;
console.log("SUMATORIO");
console.log(sumatorio+'\n');

let resultadoFin = Math.sqrt(sumatorio);
console.log("Resultado FIN");
console.log(resultadoFin);

