import * as React from "react";
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

import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";

export default function BasicCard() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  const updateUserPW = (event) => {
    setPassword(event.target.value);
  };

  const [error, setError] = useState("");

  const LoginHandler = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch("");

      if (!response.ok) {
        throw new Error("User Not Found");
      }
      const data = await response.json();

      dispatch(authActions.login());
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Card
      sx={{ minWidth: 275, display: "flex", flexDirection: "column" }}
      style={{ position: "fixed" }}
    >
      <CardHeader title="Log in" />
      <CardContent>
        <form>
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
      <Grid container>
        <Grid item>
          <Button variant="text" sx={{ m: 2 }} onClick={LoginHandler}>
            Login
          </Button>
          <Link to="/main">
            <Button variant="contained" sx={{ m: 2 }}>
              Sign in
            </Button>
          </Link>
        </Grid>
      </Grid>
      {error && <p>{error}</p>}
    </Card>
  );
}
