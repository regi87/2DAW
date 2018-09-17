<!DOCTYPE html>
<html>

<head>
    <title>Actividad 01</title>
</head>

<body>

    <?php
    $contador = 1;
    $i = 0;


    for($j=1; $j<= 3; $j++)
    {
        
        for($i=0; $i<= $j; $i++)
        {
            echo  $i. $j ;
            echo "<br>";
        }   
        
    }




    /*
    for($j=0; $j<= 5; $j++)
    {

        if($contador === 4)
        { 
            $z = $z+1;
            $contador = 1;
        }
        $contador += 1;

        echo $z .'0'. $j ;
        echo "<br>";
            
        
    }*/

    ?>


</body>

</html>