// Se importa json desde script en html y lo guardo en myServices
var myServices = my_services

function datosConfirmados(){

    // tarjeta0
    document.getElementById("direccion").innerHTML = myServices[0].addres_street + ", " + myServices[0].addres_neighborhood + ", " + myServices[0].city + ".";

    document.getElementById("fecha").innerHTML = myServices[0].date;

    document.getElementById("hora").innerHTML = myServices[0].hour;

    document.getElementById("duracion").innerHTML = myServices[0].lenght + " horas";

    document.getElementById("tipoTexto").innerHTML = myServices[0].service_type;

    if (myServices[0].service_type == "Expres") {
        document.getElementById("tipo").style.color= "white";
        document.getElementById("tipo").style.backgroundColor = "#30AAF9";
    }

    // tarjeta1
    document.getElementById("direccion1").innerHTML = myServices[1].addres_street + ", " + myServices[1].addres_neighborhood + ", " + myServices[1].city + ".";

    document.getElementById("fecha1").innerHTML = myServices[1].date;

    document.getElementById("hora1").innerHTML = myServices[1].hour;

    document.getElementById("duracion1").innerHTML = myServices[1].lenght + " horas";

    document.getElementById("tipoTexto1").innerHTML = myServices[1].service_type;

    if (myServices[1].service_type == "Expres") {
        document.getElementById("tipo1").style.color= "white";
        document.getElementById("tipo1").style.backgroundColor = "#30AAF9";
    }

    // tarjeta2
    document.getElementById("direccion2").innerHTML = myServices[2].addres_street + ", " + myServices[2].addres_neighborhood + ", " + myServices[2].city + ".";

    document.getElementById("fecha2").innerHTML = myServices[2].date;

    document.getElementById("hora2").innerHTML = myServices[2].hour;

    document.getElementById("duracion2").innerHTML = myServices[2].lenght + " horas";

    document.getElementById("tipoTexto2").innerHTML = myServices[2].service_type;


    if (myServices[2].service_type == "Expres") {
        document.getElementById("tipo2").style.color= "white";
        document.getElementById("tipo2").style.backgroundColor = "#30AAF9";
    }

}

datosConfirmados()