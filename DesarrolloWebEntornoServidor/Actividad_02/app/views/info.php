
 <?php

    $isError = false;
    $array_variable[0]=$_POST['variable_1'];
    $array_variable[1]=$_POST['variable_2'];
    $array_variable[2]=$_POST['variable_3'];

    function comprobate ($array_variable)
    {       
            for ($i=0; $i < count($array_variable); $i++) { 
                if($array_variable[$i] < 0 || $array_variable[$i] > 255 )
                    {
                        $isError = true;
                        return $isError;
                    }
                else {
                    $isError = false;
                    return $isError;
                }
            }
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>INFO PHP</title>
    </head>
        <body>
            <?php 
                $isError=comprobate($array_variable);

                if($isError == false)
                {
                    echo '<div style="background-color: rgb('.$array_variable[0].', '.$array_variable[1].' , '.$array_variable[2].')">RGB('.$array_variable[0].', '.$array_variable[1].','.$array_variable[2].')</div>';
                   
                    for ($i=0; $i < count($array_variable); $i++) { 
                        echo '<h3>'.($i+1).'º'.' Númer Hexadecimal : '.dechex($array_variable[$i]).'</h3>';
                    }
                }
                else {
                    echo '<h1>NÚMEROS INCORRECTOS</h1>';
                }
            ?>
        </body>
</html>