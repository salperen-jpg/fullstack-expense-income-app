const addBalance = async (req, res) => {
  res.send('Add balance');
};
const getBalances = async (req, res) => {
  res.send('Get balance');
};
const deleteBalance = async (req, res) => {
  res.send('delete balance');
};
const editBalance = async (req, res) => {
  res.send('Edit balance');
};

export { addBalance, getBalances, deleteBalance, editBalance };
