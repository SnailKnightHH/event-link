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
import Container from "@mui/material/Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";
import { useHistory } from "react-router-dom";
import Logo from "../Images/Eventlink-logo.png";

export default function BasicCard() {
  const dispatch = useDispatch();
  const history = useHistory();
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
    const userInfo = { username: userName, password };
    console.log(userInfo);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      console.log(response.ok);
      if (!response.ok) {
        throw new Error("User Not Found");
      }
      dispatch(authActions.login());
      history.push("/Main");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="test"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <CardHeader
          style={{ paddingBottom: 0 }}
          avatar={
            <img
              src={Logo}
              alt="EventLink Logo"
              style={{ maxWidth: "4rem", margin: "1rem 0" }}
            />
          }
          title={<Typography variant="h5">Event-Link</Typography>}
        />
        <CardContent>
          <h1>login</h1>
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
            <Button
              component={Link}
              to={"/SignUp"}
              variant="contained"
              sx={{ m: 2 }}
            >
              Sign up
            </Button>
            <Button
              component={Link}
              to={"/main"}
              sx={{ m: 2 }}
              onClick={LoginHandler}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
        {error && <p>{error}</p>}
      </Card>
    </div>
  );
}
