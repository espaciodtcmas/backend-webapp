export class ApiResponse {
    private statusCode: number;
    private message: String;
    private data: Object

    constructor(statusCode: number, message: string, data: Object) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export class Ok extends ApiResponse{
    constructor(data: object) {
        const statusCode = 200;
        const message = "OK";
        super(statusCode,message,data);
    }
}
