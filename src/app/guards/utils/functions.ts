//Convertir Días 360
export function diasTrabajados(fechaInicio: any, fechaFin: any) {
    let fechaInicial = new Date(fechaInicio);
    let fechaFinal = new Date(fechaFin);

    // EXTRAER AÑOS
    let anoInicial = fechaInicial.getUTCFullYear();
    let anoFinal = fechaFinal.getUTCFullYear();
    let anos = 0;

    //EXTRAER MESES
    let mesInicial = fechaInicial.getUTCMonth();
    let mesFinal = fechaFinal.getUTCMonth();
    let meses = 0;

    //EXTRAER DÍAS
    let diaInicial = fechaInicial.getUTCDate();
    let diaFinal = fechaFinal.getUTCDate();

    let dias = 0;

    if (mesInicial == 1) {
        if (diaInicial == 1) {
            if (mesFinal == 1) {
                if (diaFinal == 28) {
                    diaFinal = fechaFinal.getUTCDate() + 2;
                }
            }
        }

    } else {
        if (diaInicial == 31) {
            diaInicial = 30
        }
        if (diaFinal == 31) {
            diaFinal = 30;
            console.log(diaFinal)
            if (diaInicial < 30) {
            } else {
                diaFinal = 30;
            }
        }
    }
    anos = anoFinal - anoInicial;
    meses = mesFinal - mesInicial;
    dias = (diaFinal + 1) - (diaInicial);

    const finalDate = anos * 360 + meses * 30 + dias
    return finalDate;
}

//Fórmula Cesantías
export function cesantiasF(baseSalarial: any, diasLaborados: any, diasLiquidar: number = 360) {

    const cesantias = (baseSalarial * diasLaborados) / diasLiquidar;

    return cesantias;

}

