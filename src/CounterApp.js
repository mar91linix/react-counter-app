import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, value }) => {

    const [ counter, setCounter ] = useState( value );  // []

    // handleSubstract
    const handleSubstract = () => {
        if (counter <= 0 ) {
            return;
        } else {
            setCounter( counter - 1 );
        }
    }

    // handleReset
    const handleReset = () => {
        setCounter( value );
    }

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    return (
        <>
            <h1> { title } </h1>
            <h2> { counter } </h2>

            <hr />

            <button onClick={ handleSubstract } > - 1 </button>
            <button onClick={ handleReset } > Reset </button>
            <button onClick={ handleAdd } > + 1 </button>
        </>
    )

}

CounterApp.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
