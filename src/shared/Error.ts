export class NoEncontrado extends Error {
    private statusCode: number;

    constructor() {
        const message = "No encontrado"
        super(message);
        this.statusCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NoAutorizado extends Error {
    private statusCode: number;

    constructor() {
        const message = "No tienes autorizacion para acceder a este recurso"
        super(message);
        this.statusCode = 401;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class InternalServerError extends Error {
    private statusCode: number;

    constructor() {
        const message = "No encontrado"
        super(message);
        this.statusCode = 500;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ErrorDeTipo extends Error {

    constructor(inputConError: any, tipoQueDebeSer: any) {
        const message = `Error de tipo => '${inputConError}' es de tipo '${typeof inputConError}' debe ser de tipo '${tipoQueDebeSer}' `
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ErrorReq extends Error {

    constructor(campoFaltante: any) {
        const message = `Error Req => falta el campo '${campoFaltante}' en req' `
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}

