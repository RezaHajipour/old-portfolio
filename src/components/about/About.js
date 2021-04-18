import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import reza7 from "../../images/reza7.png";
import { CenterFocusStrong } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // backgroundColor: "#2d3748",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#dee2e6",
    color: "6b6c6b",
    display: "flex",
    alignItems: "center",
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  smallMenuTop: {
    backgroundColor: "#dee2e6",
    color: "black",
  },
  aboutMain: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    paddingTop: "2rem",
    paddingLeft: "5rem",
    lineHeight: "210%",
    fontSize: "18px",
  },
}));

const About = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //   const preventDefault = (event) => event.preventDefault();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <img src={reza7} className="reza" style={{ width: 150, height: 150 }} />
      <br />
      <h1>REZA HAJIPOUR</h1>
      <h4>Frontend Web Developer</h4>

      <List>
        <ListItem className={classes.menuText} button component={Link} to="/">
          Home
        </ListItem>
        <ListItem
          className={classes.menuText}
          button
          component={Link}
          to="/about"
        >
          About
        </ListItem>
        <ListItem
          className={classes.menuText}
          button
          component={Link}
          to="/works"
        >
          Works
        </ListItem>
        <ListItem
          className={classes.menuText}
          button
          component={Link}
          to="/Skills"
        >
          Skills
        </ListItem>
        <ListItem
          className={classes.menuText}
          button
          component={Link}
          to="/Contact"
        >
          Contact
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.smallMenuTop}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Reza Hajipour
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph className={classes.aboutMain}>
          I'm Reza Hajipour web designer and developer.  I completed my
          undergraduate degree in Hausa Language and Literature. After
          graduation from university, I Studied Filmmaking at Iranian young
          cinema society (IYCS). At age of 22 I started to work in media as a
          Radio and TV producer. With 20+ years of visual storytelling
          experience I worked in many different positions such as producer
          directer, cameraman and editor. Beside visual story telling I
          organised an international film festival in Lisbon, Portugal (Arroios
          Film Festival) for 3 years. I was film festival jury in some
          international film festival. I started coding in Cavendish College
          London in 2006. The first programming language I came up with was
          Html. Created some statistic web page but didn’t continue more. All
          the time I was trying to get to know coding. Finally corona crises
          gave this opportunity to me to study coding. In January 2021 attended
          in an intensive bootcamp at WBS coding school. To this end, I got
          acquainted with Html, CSS, JavaScript and React.js and CSS framework
          like Bootstrap and Material UI and tried to do various projects. If
          you have any questions, I'll be happy to answer.  Contact me right
          now!
        </Typography>
      </main>
    </div>
  );
};

About.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default About;
