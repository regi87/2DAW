
let array = [0,5];
let array_2 = [2,6];

getClosestEnemyIndex(array, array_2);
function getClosestEnemyIndex(characterPosition, enemyPosition)
{
    console.log(euclideanDistance(characterPosition, enemyPosition));
}

function euclideanDistance(punto_1, punto_2)
{
    let result = Math.sqrt(((punto_2[0]-punto_1[0])* (punto_2[0]-punto_1[0]))+ ((punto_2[1]-punto_1[1])* (punto_2[1]-punto_1[1])));
    return result;
}
