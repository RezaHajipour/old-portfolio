import "./Nav.css";
import Button from '@material-ui/core/Button';
import React, { Link } from 'react';
import { makeStyles } from '@material-ui/core';
import logo1 from "../../images/logo1.png";


const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: 100,
        padding: 0,
        // marginTop: 100,
        height: 500,
    },
    tag: {
        borderRadius: '0 3px 3px 0',
        background: '#FFFFFF',
        borderLeft: `3px solid ${palette.primary.main}`,
        fontWeight: 'bold',
        padding: '8px 16px',
        margin: spacing(1),
    },
    foto: {
        width: 50,
    },
}));

const Nav = () => {
    const classes = useStyles();

    return (<div className={classes.root}>
        <Button className={classes.tag}>Label 1</Button>
        <br />
        <Button className={classes.tag}>Label 1</Button><br />
        <Button className={classes.tag}>Label 1</Button><br />
        <img className={classes.foto} src={logo1} alt="Logo" /><br />
        <Button className={classes.tag}>Label 1</Button><br />
    </div>
    );
};


export default Nav;



