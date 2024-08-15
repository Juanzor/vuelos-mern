import { Router } from 'express';
import {
    getFlights,
    createFlight,
    deleteFlight,
    updateFlight,
    getFlightById,
    getFlight,
} from '../controllers/flightsController.js';

const router = Router();

router.get('/flights', getFlights);
router.get('/flight/:id', getFlightById);
router.get('/flights/flight', getFlight);
router.post('/flights', createFlight);
router.delete('/flights/:id', deleteFlight);
router.put('/flights/:id', updateFlight);

export default router;
