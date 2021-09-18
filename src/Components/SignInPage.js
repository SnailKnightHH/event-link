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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card
      sx={{ minWidth: 275, display: "flex", flexDirection: "column" }}
      style={{ position: "fixed" }}
    >
      <CardHeader title="Sign in" />
      <CardContent>
        <form onSubmit="">
          <TextField
            fullWidth
            required
            label="User name"
            value="email"
            sx={{ mb: 3 }}
          />
        </form>
        <form onSubmit="">
          <TextField fullWidth required label="Password" value="email" />
        </form>
      </CardContent>
      <Grid container>
        <Grid item>
          <Button variant="text" sx={{ m: 2 }}>
            Login
          </Button>
          <Button variant="contained" sx={{ m: 2 }}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
