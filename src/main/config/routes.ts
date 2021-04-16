import { Express, Router } from 'express';
import pingRoutes from '../routes/ping';

const router = Router();

export default (app: Express): void => {
    app.use('/',router);

    pingRoutes(router);
}
