import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./NavBar.js";
import { display, flexbox, margin } from "@mui/system";
import { Loader } from "@googlemaps/js-api-loader";
import { Link } from "react-router-dom";

const HostPage = () => {
  const loader = new Loader({
    apiKey: "AIzaSyDmRk7NO6m6Q002fnOnz3vrJOjzbg61qPw",
    version: "weekly",
  });

  loader.load().then((google) => {
    new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });

  const HostHandler = async (event) => {
    // event.preventDefault();
    // const userInfo = { username: userName, password };
    // console.log(userInfo);
    // setError(null);
    // try {
    //   const response = await fetch("http://127.0.0.1:8000/login/", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userInfo),
    //   });
    //   console.log(response.ok);
    //   if (!response.ok) {
    //     throw new Error("User Not Found");
    //   }
    //   const data = await response.json();
    //   dispatch(authActions.login());
    //   history.push("/main");
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  return (
    <div>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmRk7NO6m6Q002fnOnz3vrJOjzbg61qPw&callback=initMap&v=weekly"
        async
      ></script>
      <Navbar></Navbar>

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
          style={{ margin: "0.5rem 0" }}
        />
        <TextField
          required
          defaultValue=""
          label="Description"
          style={{ margin: "0.5rem 0" }}
        />
        <TextField
          required
          defaultValue=""
          label="cover image"
          style={{ margin: "0.5rem 0" }}
        />
        <Button component="label" style={{ width: "50%" }}>
          Upload File
          <input type="file" hidden />
        </Button>
        <TextField
          required
          defaultValue=""
          label="location"
          style={{ margin: "0.5rem 0" }}
        />
        <div id="map" style={{ height: "30rem" }}></div>
        <TextField
          required
          defaultValue=""
          label="category"
          style={{ margin: "0.5rem 0" }}
        />
        <Button
          component={Link}
          to={"/main"}
          variant="contained"
          style={{ width: "50%" }}
          onClick={HostHandler}
        >
          host
        </Button>
      </section>
    </div>
  );
};

export default HostPage;
