<?php
    $host = "localhost";
    $user = "root";
    $password = '';
    $db_name = "login_db";

    $con = mysqli_connect($host, $user, $password, $db_name);
    if(!$con){
        echo"Connection Failed!";
    }
    ?>