const register = async (req, res) => {
  res.send('Register');
};
const login = async (req, res) => {
  res.send('login');
};
const updateUser = async (req, res) => {
  res.send('Update');
};

export { register, login, updateUser };
