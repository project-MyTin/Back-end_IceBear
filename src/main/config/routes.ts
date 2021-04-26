import { Express, Router } from 'express';

import pingRoutes from '../routes/ping';
import motionRoutes from '../routes/motion';

const router = Router();

export default (app: Express): void => {
    app.use('/',router);

    pingRoutes(router);
    motionRoutes(router);
}
