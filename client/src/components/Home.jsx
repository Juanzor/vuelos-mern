import React, { useEffect, useState } from 'react';
import Flight from './Flight';
import { getFlightsRequest } from '../api/flightApi.js';

const Home = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getFlightsRequest();
            setFlights(response.data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='container mt-5 '>
                <h3 className='mb-5'>Proximos vuelos</h3>
                {loading ? (
                    <h1>Cargando...</h1>
                ) : (
                    <>
                        <div className='table-responsive'>
                            <table className='table table-dark table-striped table-hover  '>
                                <thead>
                                    <tr>
                                        <th scope='col'>Horario llegada</th>
                                        <th scope='col'>Vuelo</th>
                                        <th scope='col'>Línea Aerea</th>
                                        <th scope='col'>Demorado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {flights.map((flight) => (
                                        <Flight key={flight.id} flight={flight} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Made by{' '}
                            <a
                                className='link-light link-offset-2'
                                target='_blank'
                                href='https://juanzor.github.io/'
                            >
                                Juanzor
                            </a>
                        </p>
                    </>
                )}
            </div>
        </>
    );
};

export default Home;
