

const verificacion = ({ fecha, estamesa, idclient }) => {
     
    let estafecha = new Date();
    let bandera1 = false, bandera2 = false, bandera3 = false;
    let esteaño = estafecha.getFullYear();
    let estemes = estafecha.getMonth() + 1, estedia = estafecha.getDate();
 
    if (estamesa * 1 > 9 && estamesa * 1 <= 99 && idclient && idclient.length > 2) bandera1 = true;
     
    let x1 = fecha[4], x2 = fecha[7], x3 = fecha[10], x4 = fecha[13];
    let dia = fecha[8] + fecha[9], mes = fecha[5] + fecha[6];
    let año = fecha[0] + fecha[1] + fecha[2] + fecha[3];
    let hora = fecha[11] + fecha[12];
    let hora2 = hora * 1;
    hora2 = hora2 + 2;
    let minutos = fecha[14] + fecha[15];
 
    if (año * 1 >= esteaño && mes * 1 >= estemes ) {        
        if(mes * 1 > estemes) bandera2 = true;
        if(mes * 1 == estemes && dia*1 >= estedia) bandera2 = true;        
    }   

    if (x1 === "-" && x2 === "-" && x3 === "T") {
        bandera3 = true;
    }
    let fechareserva = año + x1 + mes + x2 + dia + x3 + hora + x4 + minutos;
    let fechareserva2 = año + x1 + mes + x2 + dia + x3 + hora2 + x4 + minutos;

    return { bandera1, bandera2, bandera3, fechareserva, fechareserva2 }
}

module.exports = verificacion;