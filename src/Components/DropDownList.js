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
    if (props.updateCurCategory != null) props.updateCurCategory(Category);
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
          <MenuItem value={3}>Gaming</MenuItem>
          <MenuItem value={4}>Movie</MenuItem>
          <MenuItem value={5}>Concerts</MenuItem>
          <MenuItem value={6}>Travel</MenuItem>
          <MenuItem value={7}>Dating</MenuItem>
          <MenuItem value={8}>Study</MenuItem>
          <MenuItem value={9}>Business</MenuItem>
          <MenuItem value={10}>Hackathons</MenuItem>
          <MenuItem value={11}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
