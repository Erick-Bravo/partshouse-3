import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Box } from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  };

  return (
    <header className="header">
      <Box fontWeight="bold" fontSize="30px">
        <Link to="/">Partshouse</Link>
      </Box>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
