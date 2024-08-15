import React from 'react';

const Flight = ({ flight }) => {
    return (
        <tr>
            <td>{flight.horario}</td>
            <td>{flight.vuelo}</td>
            <td>{flight.linea}</td>
            <td>{flight.demorado ? 'Si' : 'No'}</td>
        </tr>
    );
};

export default Flight;
