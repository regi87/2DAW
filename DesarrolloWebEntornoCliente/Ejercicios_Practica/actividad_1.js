
let string ="Josep Sergio GAYS y Josep són super GAYS";
let arrayString=string.split(" ");
var miMapa = new Map();

for(let i=0; i<arrayString.length; i++)
{ 
    if(miMapa.has(arrayString[i]))
    {
        let count = miMapa.get(arrayString[i]);
        console.log("COUNT: "+count)
        miMapa.set(arrayString[i], count+1);
    }
    else
    {
        miMapa.set(arrayString[i], 1);
    }
}
console.log(miMapa);


