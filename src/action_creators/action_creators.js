function acornEaten(acornCount){
  return {
    type: 'EAT_ACORN',
    amount: acornCount
  };
};
  
function acornBought(acornCount){
  return {
    type: 'BUY_ACORN',
    amount:  acornCount
  }
};

export {acornEaten, acornBought}