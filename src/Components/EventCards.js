import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default class EventCards extends React.Component {
  state = {
    loading: true,
    events: [],
  };

  async componentDidMount() {
    const url = "http://localhost:8000/api/events";
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((d) => {
      this.setState((prevState) => ({
        events: [...prevState.events, d],
      }));
    });
  }

  render() {
    if (this.state.events.length == 0) {
      return <div>didn't get an event</div>;
    }

    return (
      <Grid container spacing={2}>
        {this.state.events.map((p) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card key={p.title} sx={{ width: 300, margin: "2rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
