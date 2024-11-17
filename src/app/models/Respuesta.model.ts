export class RespuestaModel<T> {
    status?: string;
    message?: string;
    data?: T;
    token?: string;
}

