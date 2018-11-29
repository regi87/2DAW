
let a_1=["Regi", "Paco", "Sergio"];
let a_2 = ["Sergio"];

Usuarios(a_1, a_2);
function Usuarios(usersArray, blackList)
{
    let result = [];
    contador = 0;
    for (const iterator_1 of usersArray) {
       for (const iterator_2 of blackList) {
           console.log(iterator_1);
           
           if(iterator_1 !== iterator_2)
            result[contador] = iterator_1;
       }
       contador++;
    }
    console.log(result);    
}