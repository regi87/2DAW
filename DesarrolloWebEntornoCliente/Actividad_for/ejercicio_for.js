let frase = "Esto es una frase para contar sus palabras";
let frase_2 = "Esto es una frase  palabras";
contador = 0;

for (let index of frase.split(" "))
    for (let index2 of frase_2.split(" ")) {
        if (index === index2) {
            {
                contador += 1;
                console.log("Palabras Iguales: "+index + " ----- "+index2)
            }
        }
    }
console.log("Numero de palabras que coinciden: "+contador);
