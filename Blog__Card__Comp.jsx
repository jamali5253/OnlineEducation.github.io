import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className="blang">
      <CardMedia
        component="img"
        height="140"
        image={props.Bimg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.Bheading}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.Btitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Share</Button>
        <Button size="medium">Learn More</Button>
      </CardActions>
    </Card>
  );
}
