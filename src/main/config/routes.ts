import { Express, Router } from 'express';

import pingRoutes from '../routes/ping';
import motionRoutes from '../routes/motion';
import routineRoutes from '../routes/routine';

const router = Router();

export default (app: Express): void => {
    app.use('/',router);

    pingRoutes(router);
    motionRoutes(router);
    routineRoutes(router);
}
