import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [Category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    props.updateCurCategory(Category);
  };

  return (
    <Box sx={{ width: 240 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={1}>Gaming</MenuItem>
          <MenuItem value={2}>Movie</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
