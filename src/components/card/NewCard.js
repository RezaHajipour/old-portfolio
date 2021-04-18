import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import aftereffects from "../../images/aftereffects.png";
import css from "../../images/css.png";

const NewCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const logos = [
    { image: `${aftereffects}`, title: "After Effectssssss" },
    { image: "../../images/css.png", title: "Agile" },
    { image: "../../images/Audition.png", title: "Audition" },
    { image: "../../images/Bootstrap.png", title: "Bootstrap" },
    { image: "../../images/css.png", title: "CSS" },
  ];

  const renderCard = (logo, index) => {
    return (
      <Card className={classes.cardroot} key={index}>
        <CardMedia className={classes.cardmedia} src={logo.image} />
        <CardContent>
          <Typography variant="h5" color="textSecondary" component="p">
            {logo.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  };
  return <div>{logos.map(renderCard)}</div>;
};

export default NewCard;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));
