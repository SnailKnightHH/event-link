import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";

const SignUpPage = () => {
  const [ifSignedUp, setIfSignedUp] = useState(false);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async () => {
    setError(null);
    try {
      const response = await fetch();

      if (!response.ok) {
        throw new Error("User Not Found");
      }
      const data = await response.json();
    } catch (error) {
      setError(error.message);
    }

    setIfSignedUp(true);
  };
  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  const updateUserPW = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Card
      sx={{ minWidth: 275, display: "flex", flexDirection: "column" }}
      style={{ position: "fixed" }}
    >
      <CardHeader title="Sign Up" />
      <CardContent>
        <form onSubmit="">
          <TextField
            fullWidth
            required
            label="User name"
            variant="outlined"
            onChange={updateUserName}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            required
            label="Password"
            variant="outlined"
            onChange={updateUserPW}
          />
        </form>
      </CardContent>

      <Button
        component={Link}
        to={"/main"}
        variant="contained"
        sx={{ m: 2 }}
        onClick={signUpHandler}
      >
        Sign Up
      </Button>

      {ifSignedUp && <p>Sign Up Successful!</p>}
      {error && <p>{error}</p>}
    </Card>
  );
};

export default SignUpPage;
