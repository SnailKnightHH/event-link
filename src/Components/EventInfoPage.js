import React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Navbar from "./NavBar.js";
import { deepOrange } from "@mui/material/colors";
import { Link, useParams } from "react-router-dom";

const EventInfo = () => {
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

  return (
    <div style={{ padding: "1rem" }}>
      <Navbar />
      <h1>Event Name: </h1>
      <p>{Data.title}</p>
      <h1>Description</h1>
      <p>{Data.description}</p>
      <h1>Location: </h1>
      <p>Looking for minecraft gamers!</p>
      <h1>Category: </h1>
      <p>{Data.cartegory}</p>

      <Button component={Link} to={"/main"} variant="contained">
        Attend
      </Button>

      <h1>Attenders:</h1>
      <ul>
        <li style={{ listStyleType: "none" }}>
          <Button color="inherit">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>NL</Avatar>
            <p>John Smith</p>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default EventInfo;
