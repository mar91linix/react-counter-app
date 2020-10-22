import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { titulo, subtitulo } ) => {

    return (
        <>
            <h1> { titulo } </h1>
            <h2> { subtitulo }</h2>
        </>
    );
}

PrimeraApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
};

PrimeraApp.defaultProps = {
    subtitulo: "Bienvenido a mi app!"
};

export default PrimeraApp;