
const initialState = {
  amount: 0
};

const acorns = (state = initialState, action)=> {
  if (action.type ==='BUY_ACORN'){
    let newAmount = state.amount + action.amount;
    return {
      ...state,
      amount: newAmount
    }
} if (action.type ==='EAT_ACORN'){
    let newAmount = Math.max(state.amount - action.amount, 0);
    return {
      ...state,
      amount: newAmount
      }
    } else {
    }
    return state
}

export default acorns