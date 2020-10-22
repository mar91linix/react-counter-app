import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

// import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp title="Counter App" value={ 10 } />, divRoot );
