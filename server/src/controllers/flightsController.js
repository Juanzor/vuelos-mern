import { Vuelo } from '../models/Flight.js';

export const getFlights = async (req, res) => {
    try {
        const flights = await Vuelo.findAll();
        return res.json(flights);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getFlightById = async (req, res) => {
    const { id } = req.params;
    try {
        const flight = await Vuelo.findByPk(id);

        if (!flight) return res.status(404).json({ message: 'Vuelo no encontrado' });

        res.json(flight);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createFlight = async (req, res) => {
    let { vuelo, horario, linea, demorado } = req.body;
    try {
        const flightFound = await Vuelo.findOne({
            where: {
                vuelo,
            },
        });

        if (flightFound) {
            return res.sendStatus(409);
        }
        const newFlight = await Vuelo.create({
            vuelo,
            horario,
            linea,
            demorado,
        });

        return res.status(201).json({ newFlight });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const deleteFlight = async (req, res) => {
    const { id } = req.params;
    try {
        await Vuelo.destroy({
            where: {
                id,
            },
        });
        return res.status(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const updateFlight = async (req, res) => {
    const { id } = req.params;
    const { vuelo, horario, linea, demorado } = req.body;

    try {
        const flight = await Vuelo.findByPk(id);
        flight.vuelo = vuelo;
        flight.horario = horario;
        flight.linea = linea;
        flight.demorado = demorado;
        await flight.save();

        return res.status(201);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
