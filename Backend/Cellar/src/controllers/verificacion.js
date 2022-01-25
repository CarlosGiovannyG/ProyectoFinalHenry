

const verificacion = ({ fecha, estamesa, idclient }) => {

    console.log("fecha: ", fecha, " esta mesa: ", estamesa,);

    // inicio verificacion de datos y seteo de esteaño, estemes, estedia: 2022-01-25T10:00
    let estafecha = new Date();
    console.log(estafecha);

    let bandera1 = false, bandera2 = false, bandera3 = false, esteaño = estafecha.getFullYear();
    let estemes = estafecha.getMonth() + 1, estedia = estafecha.getDate();


    // primera verificacion
    if (estamesa * 1 > 9 && estamesa * 1 <= 99 && idclient && idclient.length > 2) bandera1 = true;

    //inicio la segunda verificacion con valores :) 
    let x1 = fecha[4], x2 = fecha[7], x3 = fecha[10], x4 = fecha[13];
    let dia = fecha[8] + fecha[9], mes = fecha[5] + fecha[6];
    let año = fecha[0] + fecha[1] + fecha[2] + fecha[3];
    let hora = fecha[11] + fecha[12];
    let hora2 = hora * 1;
    hora2 = hora2 + 2;
    let minutos = fecha[14] + fecha[15];
    console.log("dia :", dia, " mes :", mes + " año: " + año, " hora: " + hora, " minutos: ", minutos);

    if (año * 1 >= esteaño && mes * 1 >= estemes && dia * 1 >= estedia) {
        console.log("dia :", dia, " mes :", mes + " año: " + año, " hora: " + hora, " minutos: ", minutos);
        bandera2 = true;
    }
    //inicio la tercera verificacion de simbolos :) 
    console.log(x1, " ", x2, " ", x3, " ", x4, " los simbolos");

    if (x1 === "-" && x2 === "-" && x3 === "T") {
        bandera3 = true;
    }
    let fechareserva = año + x1 + mes + x2 + dia + x3 + hora + x4 + minutos;
    let fechareserva2 = año + x1 + mes + x2 + dia + x3 + hora2 + x4 + minutos;
    console.log("banderas de salida");
    return { bandera1, bandera2, bandera3, fechareserva, fechareserva2 }
}

module.exports = verificacion;