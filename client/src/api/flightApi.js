import axios from 'axios';

const uri = 'http://localhost:3000/flights/api/v1/flights';

export const getFlightsRequest = async () => await axios.get(uri);

export const deleteFlightRequest = async (id) => await axios.delete(`${uri}/${id}`);

export const createFlightRequest = async (flight) => await axios.post(uri, flight);

export const updateFlightRequest = async (id, flight) =>
    await axios.put(`${uri}/${id}`, flight);
