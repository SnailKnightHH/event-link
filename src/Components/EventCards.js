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
import Switch from "@mui/material/Switch";
import { Loader } from "@googlemaps/js-api-loader";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const EventCards = () => {
  const history = useHistory();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [category, setCategory] = useState("");
  const [ifMap, setIfMap] = useState(false);

  useEffect(async () => {
    setCategory(-1);
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

    if (document.getElementById("map3")) {
      const loader = new Loader({
        apiKey: "AIzaSyDmRk7NO6m6Q002fnOnz3vrJOjzbg61qPw",
        version: "weekly",
      });

      loader.load().then((google) => {
        new google.maps.Map(document.getElementById("map3"), {
          center: { lat: 43.6427, lng: -79.3871 },
          zoom: 11,
        });
      });
    }
    setDisplayedEvents(data);
  }, [ifMap]);

  const handleChange = (event) => {
    console.log("event.target.value: " + event.target.value);
    //category = event.target.value;
    let temp = [];
    events.forEach((e) => {
      if (e.cartegory === event.target.value || event.target.value === -1) {
        temp.push(e);
        console.log("temp");
        console.log(temp);
      }
    });
    setDisplayedEvents(temp);
  };

  const enterEventEntry = async (productId) => {
    console.log("in");
    console.log(productId);
    const url = `http://localhost:8000/api/events/${productId}`;
    console.log(`url ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    history.push(`/Main/${productId}`, { productId });
  };

  const MapView = () => {
    setIfMap(true);
  };

  const IconView = () => {
    setIfMap(false);
  };

  // const createMap = (google) => {
  //   new google.maps.Map(document.getElementById("map3"), {
  //     center: { lat: 43.6427, lng: -79.3871 },
  //     zoom: 11,
  //   });
  // })

  // let mapResponse = await loader.load();
  // if(mapResponse) {
  //   createMap(google);
  // }

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
      <Box sx={{ width: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            defaultValue={-1}
            onChange={handleChange}
          >
            <MenuItem value={-1}>All</MenuItem>
            <MenuItem value={3}>Gaming</MenuItem>
            <MenuItem value={4}>Movie</MenuItem>
            <MenuItem value={5}>Concerts</MenuItem>
            <MenuItem value={6}>Travel</MenuItem>
            <MenuItem value={7}>Dating</MenuItem>
            <MenuItem value={8}>Study</MenuItem>
            <MenuItem value={9}>Business</MenuItem>
            <MenuItem value={10}>Hackathons</MenuItem>
            <MenuItem value={11}>Other</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ButtonGroup variant="contained" style={{ marginTop: "1rem" }}>
        <Button onClick={MapView}>Map</Button>
        <Button onClick={IconView}>Icons</Button>
      </ButtonGroup>
      {ifMap && (
        <div id="map3" style={{ height: "40rem", marginBottom: "1rem" }}></div>
      )}
      {!ifMap && (
        <Grid container spacing={2}>
          {displayedEvents.map((p) => (
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
      )}
    </div>
  );
};

export default EventCards;
