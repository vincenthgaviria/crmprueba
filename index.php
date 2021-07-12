<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "clientes";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);



if (isset($_GET["consultar"])){
    $sqlclientes = mysqli_query($conexionBD,"SELECT * FROM clientes WHERE Id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlclientes) > 0){
        $clientes = mysqli_fetch_all($sqlclientes,MYSQLI_ASSOC);
        echo json_encode($clientes);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["borrar"])){
    $sqlclientes = mysqli_query($conexionBD,"DELETE FROM clientes WHERE Id=".$_GET["borrar"]);
    if($sqlclientes){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $Nombre=$data->Nombre;
    $Correo=$data->Correo;
    $Nacimiento=$data->Nacimiento;
    $Creacion=$data->Creacion;
    $sqlclientes = mysqli_query($conexionBD,"INSERT INTO clientes(Nombre,Correo,Nacimiento,Creacion) VALUES('$Nombre','$Correo','$Nacimiento','$Creacion') ");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $Id=$data->Id;
    $Nombre=$data->Nombre;
    $Correo=$data->Correo;
    $Nacimiento=$data->Nacimiento;
    $Creacion=$data->Creacion;
    
    $sqlclientes = mysqli_query($conexionBD,"UPDATE clientes SET Nombre='$Nombre',Correo='$Correo',Nacimiento='$Nacimiento',Creacion='$Creacion' WHERE Id='$Id'");
    echo json_encode(["success"=>1]);
    exit();
}

$sqlclientes = mysqli_query($conexionBD,"SELECT * FROM Clientes ");
if(mysqli_num_rows($sqlclientes) > 0){
    $clientes = mysqli_fetch_all($sqlclientes,MYSQLI_ASSOC);
    echo json_encode($clientes);
}
else{ echo json_encode([["success"=>0]]); }





?>