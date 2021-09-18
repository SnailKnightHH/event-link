import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./NavBar.js";
import { display, flexbox, margin } from "@mui/system";
import { Loader } from "@googlemaps/js-api-loader";

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
        {" "}
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
        <Button variant="contained" component="label" style={{ width: "50%" }}>
          host
        </Button>
      </section>
    </div>
  );
};

export default HostPage;
