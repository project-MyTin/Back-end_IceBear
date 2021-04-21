import { HttpResponse } from "../protocols";

export const ok = (data: any): HttpResponse => ({
    status: 200,
    statusCode: "10000",
    message: "Success",
    data
});

export const badRequest = (error: Error): HttpResponse => ({
    status: 400,
    statusCode: error.name,
    message: error.message
});

export const serverError = (error: Error): HttpResponse => ({
    status: 500,
    statusCode: error.name,
    message: error.message,
    data: error.stack
});
