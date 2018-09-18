<!DOCTYPE html>
<html>
<head>
    <title>Actividad 01</title>
</head>
<body>
    <?php
    $contador = 0;
    $contador_2 = 0;
     
        for($j=1; $j<= 256; $j++)
        {
            for($i= $contador; $i<= $j; $i++)
            {
                for($z= $contador_2; $z<= $i; $z++)
                {
                    ?>
                    <div style="background-color:rgb( <?php echo $z.','.$i.','.$j;?>)">
                    <?php echo $z.','.$i.','.$j;?>
                    </div>
                    <?php
                     echo "<br>";
                 }
            }   
            $contador +=1;
            $contador_2 += 1;
        }
       
        for($w=0; $w <= 255; $w++)
        {
            ?>
            <div style="background-color:rgb( <?php echo '0'.','.$w.','.'0';?>)">
            <?php echo '0'.','.$w.','.'0';?>
            </div>
            <?php
             echo "<br>";
        }
    ?>
</body>
</html>