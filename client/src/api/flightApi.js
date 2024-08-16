import axios from 'axios';

const url =
    import.meta.env.VITE_API_URL || 'http://localhost:3000/flights/api/v1/flights';

export const getFlightsRequest = async () => await axios.get(url);

export const deleteFlightRequest = async (id) => await axios.delete(`${url}/${id}`);

export const createFlightRequest = async (flight) => await axios.post(url, flight);

export const updateFlightRequest = async (id, flight) =>
    await axios.put(`${url}/${id}`, flight);
