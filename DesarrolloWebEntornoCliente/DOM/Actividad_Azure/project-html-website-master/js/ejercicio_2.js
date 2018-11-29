
function ejercicio_2()
{
    let image = document.querySelectorAll('.step img, a');
    let image_2 = document.querySelectorAll('.step-icon ~ img');
    let title = document.getElementsByTagName('title');
    let href = document.querySelectorAll("[href='https://go.microsoft.com/fwlink/?linkid=862126']");
    console.log(image);
    console.log(image_2);
    console.log(title);
    console.log(href);
}

ejercicio_2();