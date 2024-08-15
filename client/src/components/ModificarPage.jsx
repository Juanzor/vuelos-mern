import React from 'react';
import { getFlightsRequest } from '../api/flightApi.js';
import { useState, useEffect } from 'react';
import Alta from './Alta.jsx';

const ModificarPage = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [flightToEdit, setFlightToEdit] = useState('');

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
            {/* <div className='container mx-auto p-2 mt-5 w-25 '> */}

            <div className='mx-auto p-2 mt-5 col-sm-4 '>
                <label htmlFor='vuelo' className='form-label'>
                    Seleccionar vuelo a modificar
                </label>
                <select
                    onChange={(e) => {
                        setFlightToEdit(
                            flights.find((flight) => e.target.value == flight.vuelo)
                        );
                    }}
                    className='form-select form-select mb-3'
                >
                    <option hidden>Selecciona un vuelo</option>
                    {flights.map((flight) => (
                        <option id={flight.id} key={flight.id} value={flight.vuelo}>
                            {flight.vuelo}
                        </option>
                    ))}
                </select>
                <Alta flightToEdit={flightToEdit}  />
            </div>
            {/*   <div className='mb-3'>
                    <label htmlFor='vuelo' className='form-label'>
                        Vuelo
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='vuelo'
                        placeholder='Numero de vuelo'
                    />
                </div> */}
            {/* 
                <div className='mb-3'>
                    <label htmlFor='vuelo' className='form-label'>
                        Vuelo
                    </label>
                    <input
                        defaultValue={flightToEdit.vuelo}
                        type='text'
                        className='form-control'
                        id='vuelo'
                        placeholder='--:--'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='horario' className='form-label'>
                        Horario llegada
                    </label>
                    <input
                        defaultValue={flightToEdit.horario}
                        type='text'
                        className='form-control'
                        id='horario'
                        placeholder='--:--'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='linea' className='form-label'>
                        Linea Aerea
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='linea'
                        placeholder='--.--'
                        defaultValue={flightToEdit.linea}
                    />
                    <div className='form-check mt-3'>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            id='demorado'
                            defaultChecked={flightToEdit.demorado}
                        />
                        <label className='form-check-label' htmlFor='demorado'>
                            Demorado
                        </label>
                    </div>
                </div>
                <button type='button' className='btn btn-light my-4 '>
                    Modificar
                </button>*/}
            {/* </div> */}
        </>
    );
};

export default ModificarPage;
