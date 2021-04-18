import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // "& > *": {
    //   margin: theme.spacing(3),
    // },
    messageField: {
      height: 200,
      backgroundColor: "red",
    },
  },
}));

export default function AddressForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Me
          </Typography>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            variant="filled"
          />
          <br />
          <br />
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            variant="filled"
          />
          <br />
          <br />
          <TextField
            className={classes.messageField}
            multiline
            rows={5}
            required
            placeholder="Your Message"
            fullWidth
            variant="outlined"
            variant="filled"
          />
          <br />
          <br />
          <Button variant="contained" defaultValue="Hello World">
            Send
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
