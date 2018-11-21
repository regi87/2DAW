ejercicio_12(100);

function ejercicio_12(_contador){

    let myMap = new Map();
    let contador = _contador;
    let randNumber= 0;
    myMap.set(1,0);
    myMap.set(2,0);
    myMap.set(3,0);
    myMap.set(4,0);
    myMap.set(5,0);
    myMap.set(6,0);

    while (contador > 0)
    {
        randNumber= Math.floor(Math.random() * 6) + 1;                
        myMap.set(randNumber,  myMap.get(randNumber)+1);
        contador--;
    }
    //console.log(myMap);
    return myMap;
}