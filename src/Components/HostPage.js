import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./NavBar.js";
import { display, flexbox, margin } from "@mui/system";

const HostPage = () => {
  return (
    <div>
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
