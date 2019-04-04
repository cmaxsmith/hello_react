import { connect } from 'react-redux';
import { acornBought } from '../../src/action_creators/action_creators';
import Button from '../components/Button'

const mapStateToProps = (state) => {
  return {
    name: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(acornBought(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;