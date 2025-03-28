import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice"; 
import { Button } from "@mui/material";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={() => dispatch(login())}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Auth;
