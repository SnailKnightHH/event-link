import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const dummy_data = [
  {
    name: "lol",
    id: 1,
    description: "lol event",
    category: "Game",
    location: "Toronto",
    date: "2021-3-21",
  },
  {
    name: "lol2",
    id: 2,
    description: "lol event",
    category: "Game",
    location: "Toronto",
    date: "2021-3-21",
  },
];

const Profile = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>NL</Avatar>
      <h2>User Name</h2>
      <h2>Hosted: </h2>
      <ul>
        {dummy_data.map((event) => (
          <li>
            <p>{`${event.name} ${event.date} ${event.location}`}</p>
          </li>
        ))}
      </ul>
      <h2>Attended: </h2>
      <ul>
        {dummy_data.map((event) => (
          <li>
            <p>{`${event.name} ${event.date} ${event.location}`}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Profile;
