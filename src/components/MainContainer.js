import React from 'react';
import NavBar from '../components/NavBar'

const MainContainer = (props) => (
  <div>
    <NavBar />
   {props.children}

    {/* <BuyAcorn />
    <DisplayAcorn>{props.number} [redux] </DisplayAcorn>
    <EatAcorn />  */}
  </div>
);

export default MainContainer;