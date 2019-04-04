import { connect } from 'react-redux';
import { acornEaten } from '../../src/action_creators/action_creators';
import Button from '../components/Button'

const mapStateToProps = (state) => {
  return {
    name: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(acornEaten(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;