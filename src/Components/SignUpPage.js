import React, { useState } from "react";

const SignUpPage = () => {
  const [ifSignedUp, setIfSignedUp] = useState(false);
  const [error, seError] = useState("");

  const signUpHandler = () => {
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
      {error && <p>{error}</p>}
    </Card>
  );
};

export default SignUpPage;
