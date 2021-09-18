import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HostPage = () => {
  return (
    <section>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        sx={{ display: "block", m: 2 }}
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        sx={{ display: "block", m: 2 }}
      />
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button>
    </section>
  );
};

export default HostPage;
