import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ifSignedUp, setIfSignedUp] = useState(false);

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  const updateUserPW = (event) => {
    setPassword(event.target.value);
  };

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
      <Button variant="contained" sx={{ m: 2 }} onClick={signUpHandler}>
        Sign Up
      </Button>
      {ifSignedUp && <p>Sign Up Successful!</p>}
    </Card>
  );
};

export default SignUpPage;
