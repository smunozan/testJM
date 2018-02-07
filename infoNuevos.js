var available_service

function datosConfirmados(){

    // tarjeta0
    document.getElementById("direccion").innerHTML = available_service[0].addres_neighborhood;

    document.getElementById("fecha").innerHTML = available_service[0].date;

    document.getElementById("hora").innerHTML = available_service[0].hour;

    document.getElementById("duracion").innerHTML = available_service[0].lenght + " horas";

    document.getElementById("tipoTexto").innerHTML = available_service[0].service_type;

    if (available_service[0].service_type == "Expres") {
        document.getElementById("tipo").style.color= "white";
        document.getElementById("tipo").style.backgroundColor = "#30AAF9";
    } else if (available_service[0].service_type == "Recurrente") {
        document.getElementById("tipo").style.color= "#9032C8";
        document.getElementById("tipo").style.backgroundColor = "#F1EFF2";
    } else {
        document.getElementById("tipo").style.color= "#F223C6";
        document.getElementById("tipo").style.backgroundColor = "#F1EFF2";
    }

    // tarjeta1
    document.getElementById("direccion1").innerHTML = available_service[1].addres_neighborhood;

    document.getElementById("fecha1").innerHTML = available_service[1].date;

    document.getElementById("hora1").innerHTML = available_service[1].hour;

    document.getElementById("duracion1").innerHTML = available_service[1].lenght + " horas";

    document.getElementById("tipoTexto1").innerHTML = available_service[1].service_type;

    if (available_service[1].service_type == "Expres") {
        document.getElementById("tipo1").style.color= "white";
        document.getElementById("tipo1").style.backgroundColor = "#30AAF9";
    } else if (available_service[1].service_type == "Recurrente") {
        document.getElementById("tipo1").style.color= "#9032C8";
        document.getElementById("tipo1").style.backgroundColor = "#F1EFF2";
    } else {
        document.getElementById("tipo1").style.color= "#F223C6";
        document.getElementById("tipo1").style.backgroundColor = "#F1EFF2";
    }

    // tarjeta2
    document.getElementById("direccion2").innerHTML = available_service[2].addres_neighborhood;

    document.getElementById("fecha2").innerHTML = available_service[2].date;

    document.getElementById("hora2").innerHTML = available_service[2].hour;

    document.getElementById("duracion2").innerHTML = available_service[2].lenght + " horas";

    document.getElementById("tipoTexto2").innerHTML = available_service[2].service_type;

    if (available_service[2].service_type == "Expres") {
        document.getElementById("tipo2").style.color= "white";
        document.getElementById("tipo2").style.backgroundColor = "#30AAF9";
    } else if (available_service[2].service_type == "Recurrente") {
        document.getElementById("tipo2").style.color= "#9032C8";
        document.getElementById("tipo2").style.backgroundColor = "#F1EFF2";
    } else {
        document.getElementById("tipo2").style.color= "#F223C6";
        document.getElementById("tipo2").style.backgroundColor = "#F1EFF2";
    }

    // tarjeta3
    document.getElementById("direccion3").innerHTML = available_service[3].addres_neighborhood;

    document.getElementById("fecha3").innerHTML = available_service[3].date;

    document.getElementById("hora3").innerHTML = available_service[3].hour;

    document.getElementById("duracion3").innerHTML = available_service[3].lenght + " horas";

    document.getElementById("tipoTexto3").innerHTML = available_service[3].service_type;

    if (available_service[3].service_type == "Expres") {
        document.getElementById("tipo3").style.color= "white";
        document.getElementById("tipo3").style.backgroundColor = "#30AAF9";
    } else if (available_service[3].service_type == "Recurrente") {
        document.getElementById("tipo3").style.color= "#9032C8";
        document.getElementById("tipo3").style.backgroundColor = "#F1EFF2";
    } else {
        document.getElementById("tipo3").style.color= "#F223C6";
        document.getElementById("tipo3").style.backgroundColor = "#F1EFF2";
    }

    // tarjeta4
    document.getElementById("direccion4").innerHTML = available_service[4].addres_neighborhood;

    document.getElementById("fecha4").innerHTML = available_service[4].date;

    document.getElementById("hora4").innerHTML = available_service[4].hour;

    document.getElementById("duracion4").innerHTML = available_service[4].lenght + " horas";

    document.getElementById("tipoTexto4").innerHTML = available_service[4].service_type;

    if (available_service[4].service_type == "Expres") {
        document.getElementById("tipo4").style.color= "white";
        document.getElementById("tipo4").style.backgroundColor = "#30AAF9";
    } else if (available_service[4].service_type == "Recurrente") {
        document.getElementById("tipo4").style.color= "#9032C8";
        document.getElementById("tipo4").style.backgroundColor = "#F1EFF2";
    } else {
        document.getElementById("tipo4").style.color= "#F223C6";
        document.getElementById("tipo4").style.backgroundColor = "#F1EFF2";
    }

    // tarjeta5
    document.getElementById("direccion5").innerHTML = available_service[5].addres_neighborhood;

    document.getElementById("fecha5").innerHTML = available_service[5].date;

    document.getElementById("hora5").innerHTML = available_service[5].hour;

    document.getElementById("duracion5").innerHTML = available_service[5].lenght + " horas";

    document.getElementById("tipoTexto5").innerHTML = available_service[5].service_type;

    if (available_service[5].service_type == "Expres") {
        document.getElementById("tipo5").style.color= "white";
        document.getElementById("tipo5").style.backgroundColor = "#30AAF9";
    } else if (available_service[5].service_type == "Recurrente") {
        document.getElementById("tipo5").style.color= "#9032C8";
        document.getElementById("tipo5").style.backgroundColor = "#F1EFF2";
    } else {
        document.getElementById("tipo5").style.color= "#F223C6";
        document.getElementById("tipo5").style.backgroundColor = "#F1EFF2";
    }

    // tarjeta6
    document.getElementById("direccion6").innerHTML = available_service[6].addres_neighborhood;

    document.getElementById("fecha6").innerHTML = available_service[6].date;

    document.getElementById("hora6").innerHTML = available_service[6].hour;

    document.getElementById("duracion6").innerHTML = available_service[6].lenght + " horas";

    document.getElementById("tipoTexto6").innerHTML = available_service[6].service_type;

    if (available_service[6].service_type == "Expres") {
        document.getElementById("tipo6").style.color= "white";
        document.getElementById("tipo6").style.backgroundColor = "#30AAF9";
    } else if (available_service[6].service_type == "Recurrente") {
        document.getElementById("tipo6").style.color= "#9032C8";
        document.getElementById("tipo6").style.backgroundColor = "#F1EFF2";
    } else {
        document.getElementById("tipo6").style.color= "#F223C6";
        document.getElementById("tipo6").style.backgroundColor = "#F1EFF2";
    }

    
}

datosConfirmados()
