import User from "./user";

export default props => {
  const user = User(props);
  return {
    user
  };
};
