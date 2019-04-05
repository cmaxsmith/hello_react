import { connect } from 'react-redux';
// import { acornBought } from '../../src/action_creators/action_creators';
import App from '../components/ReduxApp'

const mapStateToProps = (state) => {
  return {
    number: state.amount,
    string: 'abcd'
  };
};


const AppContainer = connect(
  mapStateToProps,
)(App);

export default AppContainer;