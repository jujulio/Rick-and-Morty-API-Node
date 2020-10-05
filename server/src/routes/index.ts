import { Router } from 'express';

import characterRouter from './characters.routes';

const routes = Router();

routes.use('/character', characterRouter);

export default routes;
