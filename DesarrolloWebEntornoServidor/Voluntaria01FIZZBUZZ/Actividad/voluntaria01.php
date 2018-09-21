<!DOCTYPE html>
<html>
    <head>
    <title>Page Title</title>
    </head>
        <body>
          <?php
            for($i=1; $i<=100; $i++)
            {
                if ($i%3 === 0)
                   echo "<label> Fizz </label>"; 
                 if($i%5 === 0 )
                   echo "<label> Buzz </label>";
                 if($i%3 !== 0 && $i%5 !== 0)
                    echo "<label> $i </label>";
                 echo "<br>";
            }
          ?>
        </body>
</html>