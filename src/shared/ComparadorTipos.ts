import {ErrorDeTipo, ErrorReq} from "./Error.js";

export class ComparadorTipos{

    es(input: any, objetoEsperado: any) {
        for (const prop in objetoEsperado) {

            if (!(prop in input)) {
                throw new ErrorReq(prop);
            }

            const tipoEsperado = objetoEsperado[prop].name.toLowerCase();
            const tipoInput = typeof input[prop];

            if (tipoInput !== tipoEsperado) {
                throw new ErrorDeTipo(input[prop], tipoEsperado);
            }
        }
        return true;
    }

    esString(input: any){
        const resultado =  typeof input == "string";
        if(!resultado){
            throw new ErrorDeTipo(input,"string");
        }
        return resultado;
    }

    esNumero(input: any){
        const resultado = typeof input == "number";
        if(!resultado){
            throw new ErrorDeTipo(input,"number");
        }
        return resultado;
    }

    esBooleano(input: any){
        const resultado = typeof input == "boolean";
        if(!resultado){
            throw new ErrorDeTipo(input,"boolean");
        }
        return resultado;
    }
}