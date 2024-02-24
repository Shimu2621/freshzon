import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const token = localStorage.getItem("myToken");
  return token ? component : <Navigate to="/home"></Navigate>;
};

export default PrivateRoute;
