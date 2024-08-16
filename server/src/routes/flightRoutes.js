import { Router } from 'express';
import {
    getFlights,
    createFlight,
    deleteFlight,
    updateFlight,
    getFlightById,
} from '../controllers/flightsController.js';

const router = Router();

router.get('/flights', getFlights);
router.get('/flights/:id', getFlightById);
router.post('/flights', createFlight);
router.delete('/flights/:id', deleteFlight);
router.put('/flights/:id', updateFlight);

export default router;
