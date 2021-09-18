import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import eventImage from "../Images/event.jpg";
import { CardActionArea, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default class EventCards extends React.Component {
  state = {
    events: [],
    category: "",
  };

  async componentDidMount() {
    const url = "http://localhost:8000/api/events";
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((d) => {
      this.setState((prevState) => ({
        events: [...prevState.events, d],
      }));
    });
    console.log(data);
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.state.category = event.target.value;
  };

  render() {
    if (this.state.events.length == 0) {
      return <div>didn't get an event</div>;
    }
    return (
      <div>
        <Box sx={{ maxWidth: 120 }} style={{ padding: "1rem" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.category}
              label="category"
              onChange={this.handleChange}
            >
              <MenuItem value={"Game"}>Game</MenuItem>
              <MenuItem value={"Movie"}>Movie</MenuItem>
              <MenuItem value={"Thirty"}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={2}>
          {this.state.events.map((p) => (
            <Grid key={p.title} item xs={12} sm={6} md={4}>
              <Card sx={{ width: 300, margin: "2rem" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={eventImage}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
