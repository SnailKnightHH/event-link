import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";
import NavBar from "./NavBar";

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
    <React.Fragment>
      <NavBar />
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <h2>Contact Info: </h2>
        <p style={{ maxWidth: "60vw" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ducimus
          labore totam omnis vitae laborum aliquam tempore, magnam temporibus,
          officiis harum aliquid numquam sunt. Molestias sapiente sed earum
          rerum velit? Animi quas, quia voluptatum beatae sequi quidem magni, at
          culpa hic natus non molestias? Cumque laudantium, praesentium ullam
          corporis recusandae temporibus est dicta ipsum dolores itaque odit
          ipsa et eius. Necessitatibus culpa qui quisquam tenetur nulla in. In,
          asperiores rerum voluptatibus omnis repudiandae beatae reiciendis
          facere hic, impedit cupiditate sunt, totam excepturi. Quam fugiat,
          earum iure consectetur odit officia deserunt?
        </p>
        <Button component={Link} to={"/main"} variant="contained">
          Back
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Profile;
