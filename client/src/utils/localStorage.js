export const addToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getFromLocalStore = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;
};

export const removeFromLocalStorage = () => {
  localStorage.removeItem('user');
};
