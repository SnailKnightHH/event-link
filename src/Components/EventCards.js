import React from "react";
import { useEffect, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import Select from "@mui/material/Select";
import DropDownList from "./DropDownList";

const EventCards = () => {
  const history = useHistory();

  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(async () => {
    const url = "http://localhost:8000/api/events";
    const response = await fetch(url);
    const data = await response.json();
    // data.forEach((d) => {
    //   setEvents((prevState) => [prevState, d]);
    // });
    setEvents(data);
    console.log("useEffect initial data test: ");
    console.log(data);
    console.log(events);
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    this.state.category = event.target.value;
  };

  const enterEventEntry = async (productId) => {
    console.log("in");
    const url = `http://localhost:8000/api/events/${productId}`;
    console.log(`url ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    history.push(`/Main/${productId}`, { some: "value" });
  };

  if (events.length == 0) {
    return <div>didn't get an event</div>;
  }
  return (
    <div style={{ padding: "1rem" }}>
      {/* <Box sx={{ maxWidth: 120 }} style={{ padding: "1rem" }}>
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
        </Box> */}
      <DropDownList />
      <Grid container spacing={2}>
        {events.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4}>
            <Card sx={{ width: 300, margin: "2rem" }}>
              <CardActionArea
                // component={Link}
                // to={{pathname: `/Main/${p.id}`, state: {() => {
                //   enterEventEntry(p.id);
                // }}}
                onClick={() => {
                  enterEventEntry(p.id);
                }}
              >
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
};

export default EventCards;
