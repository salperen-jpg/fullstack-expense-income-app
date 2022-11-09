const calculate = (balances) =>
  balances.reduce((acc, currItem) => acc + currItem.amount, 0);

export default calculate;
