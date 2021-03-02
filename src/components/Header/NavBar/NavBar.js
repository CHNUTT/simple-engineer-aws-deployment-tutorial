import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const NavBar = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography className={classes.typography}>
        <Link
          href="https://www.google.com"
          className={classes.link}
          data-testid="nav_link"
        >
          Home
        </Link>
        <Link href="#" className={classes.link} data-testid="nav_link">
          Shop
        </Link>

        <Link href="#" className={classes.link} data-testid="nav_link">
          About
        </Link>
        <Link href="#" className={classes.link} data-testid="nav_link">
          Contact
        </Link>
      </Typography>
    </div>
  );
};

const styles = ({ palette, breakpoints }) => ({
  container: {
    display: "none",
    [breakpoints.up("sm")]: {
      display: "flex",
      paddingLeft: "25px",
    },
  },
  link: {
    color: "#363636",
    fontWeight: "700",
    fontSize: "14px",
    "&:hover": {
      color: "#787878",
      textDecoration: "none",
    },
    [breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
  typography: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [breakpoints.up("sm")]: {
      width: "50%",
    },
    [breakpoints.up("md")]: {
      width: "40%",
    },
    [breakpoints.up("lg")]: {
      width: "30%",
    },
  },
});

export default withStyles(styles)(NavBar);
