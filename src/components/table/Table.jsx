import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from "prop-types";


const Tables = ({ netIncomes }) => {

    const averageIncome = netIncomes.reduce((total, net) => total + net.income, 0) / netIncomes.length;

    return (
        <>
            <h1 className='text-light mb-5'>Practica Obligatoria 2: </h1>
            {netIncomes.map((net, index) => (
                <Table key={index} striped bordered>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Ingreso Neto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{net.brand}</td>
                            <td>{`$${net.income}`}</td>
                        </tr>
                    </tbody>
                </Table>

            ))}
            <p className='text-light'>INGRESO PROMEDIO DE LAS 3 EMPRESAS: ${averageIncome.toFixed(2)} </p>
        </>
    );
};

export default Tables;

Tables.propTypes = {
    netIncomes: PropTypes.array,
};