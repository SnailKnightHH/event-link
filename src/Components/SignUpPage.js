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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ifSignedUp, setIfSignedUp] = useState(false);
  const [error, setError] = useState("");

  const signUpHandler = async (event) => {
    event.preventDefault();
    const userInfo = { username: userName, password };
    console.log(userInfo);
    const response = await fetch("http://localhost:8000/api/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
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
    </Card>
  );
};

export default SignUpPage;
