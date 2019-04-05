import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';
import NavBar from '../components/NavBar'

const App = (props) => (
  <div>
    <BuyAcorn />
    <DisplayAcorn>{props.number} [redux] </DisplayAcorn>
    <EatAcorn /> 
  </div>
);

export default App;