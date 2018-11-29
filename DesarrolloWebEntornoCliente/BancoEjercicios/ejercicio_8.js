
let array = [1,2,3,4];

multipleFactorial(array);

function multipleFactorial(dataArray)
{
    console.log(dataArray.map(factorial));

}

function factorial(n)
{
    var total = 1;
    for(i=1; i<=n; i++)
    {
        total = total * i;
    }
    return total;

}