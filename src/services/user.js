const register = (username, password) => {
  window.localStorage.setItem("username", username);
  window.localStorage.setItem("password", password);
  debugger;
};

const getUser = () => {
  const username = window.localStorage.getItem("username");
  const password = window.localStorage.getItem("password");

  return { username, password };
};

export default props => {
  return {
    register,
    getUser
  };
};
