
import { Router } from 'express';
import UnitController from '../controller/unit-controller.js';
var middleware = require('../middleware/unitConverterValidator');

const routes = Router();
routes.post('/convert', middleware.validateUnit,UnitController.findConversion);

export default routes;