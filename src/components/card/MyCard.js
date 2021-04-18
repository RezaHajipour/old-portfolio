import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import aftereffects from "../../images/aftereffects.png";
import agile from "../../images/agile.png";
import Audition from "../../images/Audition.png";
import Bootstrap from "../../images/Bootstrap.png";
import css from "../../images/css.png";
import director from "../../images/director.png";
import finalcut from "../../images/finalcut.png";
import git from "../../images/git.png";
import GitHub from "../../images/GitHub.png";
import htiml from "../../images/HTML5.png";
import JavaScript from "../../images/JavaScript.jpeg";
import photoshop from "../../images/photoshop.png";
import premier from "../../images/premier.png";
import reactjs from "../../images/reactjs.jpeg";
import cameraman from "../../images/cameraman.jpeg";
import materialUi from "../../images/materialUi.png";
import { Grid } from "@material-ui/core";

export default function MyCard() {
  const classes = useStyles();

  const logos = [
    { image: htiml, title: "HTML5" },
    { image: css, title: "CSS" },
    { image: JavaScript, title: "JavaScript" },
    { image: reactjs, title: "React JS" },
    { image: git, title: "Git" },
    { image: GitHub, title: "GitHub" },
    { image: Bootstrap, title: "Bootstrap" },
    { image: materialUi, title: "Material-UI" },
    { image: agile, title: "Agile" },
    { image: director, title: "Film Director" },
    { image: cameraman, title: "Cameraman" },
    { image: finalcut, title: "Finalcut" },
    { image: photoshop, title: "Photoshop" },
    { image: premier, title: "Adobe Premiere" },
    { image: Audition, title: "Adobe Audition" },
    { image: aftereffects, title: "After Effects" },
  ];
  const renderCard = (logo, index) => {
    return (
      <Grid item xs={3} alignItems="center">
        <Card className={classes.root} key={index}>
          <CardHeader className={classes.title} title={logo.title} />
          <CardMedia
            className={classes.media}
            image={logo.image}
            title={logo.title}
          />
        </Card>
      </Grid>
    );
  };

  return (
    <Grid container spacing={4} alignItems="center">
      {logos.map(renderCard)}
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 220,

    backgroundColor: "#dee2e6",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    margin: "1px auto 20px",
  },
  title: {
    textAlign: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
