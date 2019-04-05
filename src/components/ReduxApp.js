import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';

const App = (props) => (
  <div>
    <BuyAcorn />
    <DisplayAcorn><h1>{props.number}</h1></DisplayAcorn>
    <EatAcorn /> 
  </div>
);

export default App;