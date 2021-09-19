import React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Navbar from "./NavBar.js";
import { deepOrange } from "@mui/material/colors";
import { Link, useParams } from "react-router-dom";

const EventInfo = (props) => {
  useEffect(() => {
    console.log("The following is props");
    console.log(props);
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
      {/* <p>{props}</p> */}
      <h1>Description: </h1>
      <p>
        Anyone who is interested can private msg me at:
        https://www.linkedin.com/in/jerry-wan/
      </p>
      <h1>Location: </h1>
      <p>Looking for minecraft gamers!</p>
      <h1>Category: </h1>
      <p>Gaming</p>

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
