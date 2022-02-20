import { Link } from "react-router-dom";

const Toolbar = ({ page, user, getCart }) => {
  return (
    <div className="toolbar">
      {!user && (
        <div>
          {page !== "/login" && <Link to="/login">Login</Link>}
          {page !== "/register" && <Link to="/register">Register</Link>}
        </div>
      )}
      {user && (
        <div>
          <Link to="/create">Create Product</Link>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({getCart.length})</Link>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
