import React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Navbar from "./NavBar.js";
import { deepOrange, lightBlue, lightGreen } from "@mui/material/colors";
import { Link, useParams } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Loader } from "@googlemaps/js-api-loader";
import "@fontsource/roboto/400.css";

const EventInfo = () => {
  const categoryMap = new Map();

  categoryMap.set(3, "Gaming");
  categoryMap.set(4, "Movies");
  categoryMap.set(5, "Concerts");
  categoryMap.set(6, "Travel");
  categoryMap.set(7, "Dating");
  categoryMap.set(8, "Study");
  categoryMap.set(9, "Business");
  categoryMap.set(10, "Hackathons");
  categoryMap.set(11, "Other");

  const [Data, setData] = useState("");

  useEffect(async () => {
    const url = `http://localhost:8000/api/events/${params.productId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  }, []);

  const params = useParams();

  if (isNaN(params.productId)) {
    return (
      <div style={{ margin: "2rem" }}>
        <p>Invalid Entry</p>
        <p>Please Enter a Valid URL</p>
      </div>
    );
  }

  const loader = new Loader({
    apiKey: "AIzaSyDmRk7NO6m6Q002fnOnz3vrJOjzbg61qPw",
    version: "weekly",
  });

  loader.load().then((google) => {
    new google.maps.Map(document.getElementById("map2"), {
      center: { lat: 43.4727, lng: -79.6542 },
      zoom: 11,
    });
  });

  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Event Name: </h1>
        <p>{Data.title}</p>
        <h1>Description</h1>
        <p style={{ maxWidth: "60vw" }}>{Data.description}</p>
        <h1>Location: </h1>
        <p>Looking for minecraft gamers!</p>
        <div
          id="map2"
          style={{ height: "25rem", width: "46rem", marginBottom: "1rem" }}
        ></div>
        <h1>Category: </h1>
        <p>{categoryMap.get(Data.cartegory)}</p>

        <h1>Attenders:</h1>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Button color="inherit">
              <Avatar sx={{ bgcolor: deepOrange[500], mr: 3 }}>JS</Avatar>
              <p>John Smith</p>
            </Button>
          </li>
          <li>
            <Button color="inherit">
              <Avatar sx={{ bgcolor: lightBlue[400], mr: 3 }}>JM</Avatar>
              <p>Jonathan Miller</p>
            </Button>
          </li>
          <li>
            <Button color="inherit">
              <Avatar sx={{ bgcolor: lightGreen[600], mr: 3 }}>AG</Avatar>
              <p>Anne Garcia</p>
            </Button>
          </li>
        </ul>

        <ButtonGroup variant="contained" style={{ marginTop: "1rem" }}>
          <Button
            component={Link}
            to={"/main"}
            variant="contained"
            sx={{ width: 1 / 2 }}
          >
            Attend
          </Button>
          <Button component={Link} to={"/main"} sx={{ width: 1 / 2 }}>
            Back
          </Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
};

export default EventInfo;
