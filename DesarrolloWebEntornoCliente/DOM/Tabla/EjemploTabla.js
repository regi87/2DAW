
tabla();
function tabla()
{
   let table= document.body.firstElementChild;
   
   for (let i = 0; i < table.tBodies[0].children.length; i++) { 
    if(parseInt(table.tBodies[0].rows[i].cells[2].textContent) < 0)
    {
        table.tBodies[0].rows[i].cells[2].style ='background-color:red;';  
        //table.tBodies[0].children[i].firstElementChild.nextElementSibling.nextElementSibling.style ='background-color:red;';  
    }
   }    
}