import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";

export default function BasicCard() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (event) => {
    console.log(userName);
    event.preventDefault();
    dispatch(authActions.login());

    //const userInfo = { userName, password };
    const userInfo = { username: "joeh", password: "sdfhke" };
    console.log(userInfo);
    const response = await fetch("http://localhost:8000/api/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Card
      sx={{ minWidth: 275, display: "flex", flexDirection: "column" }}
      style={{ position: "fixed" }}
    >
      <CardHeader title="Sign in" />
      <CardContent>
        <form>
          <TextField
            fullWidth
            required
            label="User name"
            variant="outlined"
            onChange={(e) => setUserName(e.target.event)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            required
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.event)}
          />
        </form>
      </CardContent>
      <Grid container>
        <Grid item>
          <Button variant="text" sx={{ m: 2 }} onClick={loginHandler}>
            Login{" "}
          </Button>

          <Button variant="contained" sx={{ m: 2 }}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
