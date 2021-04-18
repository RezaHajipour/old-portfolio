import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  media: {
    src: "../../images/css.png",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div>
      {/* <Paper elevation={3}> */}
      {/* <Box color="text.primary" clone> */}
      <Card
        className={classes.root}
        style={{ width: "250px", height: "300px" }}
      >
        <CardMedia
          className={classes.media}
          image="../../images/css.png"
          title="Paella dish"
        />
      </Card>
      {/* </Box> */}
      {/* </Paper> */}
    </div>
  );
}
