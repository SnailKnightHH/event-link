import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";

export default class EventInfo extends React.Component {
  state = {};

  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <h1>Event Name: </h1>
        <p>Looking for minecraft gamers!</p>
        <h1>Description: </h1>
        <p>
          Anyone who is interested can private msg me at:
          https://www.linkedin.com/in/jerry-wan/
        </p>
        <h1>Location: </h1>
        <p>Looking for minecraft gamers!</p>
        <h1>Category: </h1>
        <p>Gaming</p>
        <button>Attend</button>
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
  }
}
