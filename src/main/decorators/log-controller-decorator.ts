import { Controller, HttpResponse } from "../../presentation/protocols";
import { logger } from "../config/winston";

export class LogControllerDecorator implements Controller {
    constructor(
        private readonly controller: Controller,
    ) {}

    async handle(request: any): Promise<HttpResponse> {
        const httpResponse = await this.controller.handle(request);
        if(httpResponse.status === 500) {
            logger.error(httpResponse.data);
        }
        return httpResponse;
    }
}