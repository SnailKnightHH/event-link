import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./NavBar.js";
import { Loader } from "@googlemaps/js-api-loader";
import { Link } from "react-router-dom";
import DropDownList from "./DropDownList";
import { useState } from "react";
import { authActions } from "../Store/authSlice";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { width } from "@mui/system";
const HostPage = () => {
  const dispatch = useDispatch();
  const loader = new Loader({
    apiKey: "AIzaSyDmRk7NO6m6Q002fnOnz3vrJOjzbg61qPw",
    version: "weekly",
  });

  loader.load().then((google) => {
    new google.maps.Map(document.getElementById("map"), {
      center: { lat: 43.6427, lng: -79.3871 },
      zoom: 11,
    });
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cartegory, setCartegory] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateDescription = (event) => {
    setDescription(event.target.value);
  };
  const updateCartegory = (currentCategory) => {
    setCartegory(currentCategory);
    console.log("host" + cartegory);
  };
  const updateLocation = (event) => {
    setLocation(event.target.value);
  };

  const HostHandler = async (event) => {
    const eventInfo = {
      title,
      description,
      cartegory,
      location,
    };
    console.log(eventInfo);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/api/events/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventInfo),
      });
      console.log(response.ok);
      if (!response.ok) {
        throw new Error("User Not Found");
      }
      const data = await response.json();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmRk7NO6m6Q002fnOnz3vrJOjzbg61qPw&callback=initMap&v=weekly"
        async
      ></script>

      <section
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          width: "50vw",
        }}
      >
        <h1>Host an event</h1>
        <TextField
          required
          defaultValue=""
          label="Event Name"
          onChange={updateTitle}
          style={{ margin: "0.5rem 0" }}
        />
        <TextField
          defaultValue=""
          label="Description"
          onChange={updateDescription}
          style={{ margin: "0.5rem 0" }}
        />
        <TextField
          defaultValue=""
          label="cover image"
          style={{ margin: "0.5rem 0" }}
        />
        <Button variant="contained" component="label" style={{ width: "50%" }}>
          Upload File
          <input type="file" hidden />
        </Button>
        <TextField
          required
          defaultValue=""
          label="location"
          onChange={updateLocation}
          style={{ margin: "0.5rem 0" }}
        />
        <div id="map" style={{ height: "26rem", marginBottom: "1rem" }}></div>
        <DropDownList
          updateCurCategory={updateCartegory}
          style={{ marginBottom: "1rem" }}
        />
        <ButtonGroup variant="contained" style={{ marginTop: "1rem" }}>
          <Button
            component={Link}
            to={"/main"}
            onClick={HostHandler}
            sx={{ width: 1 / 2 }}
          >
            Host
          </Button>
          <Button component={Link} to={"/main"} sx={{ width: 1 / 2 }}>
            Back
          </Button>
        </ButtonGroup>
      </section>
    </div>
  );
};

export default HostPage;
