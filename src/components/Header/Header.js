import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../SearchBar";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

const Header = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.headerTopContainer}>
        <MenuIcon className={classes.menuIcon} />
        <Typography variant="body1" component="p" className={classes.logo}>
          EMPEROR
        </Typography>
        <SearchBar />
        <div className={classes.freeShippingAndCartContainer}>
          <div className={classes.freeShippingContainer}>
            <LocalShippingIcon className={classes.truckIcon} />
            <div className={classes.freeShippingTextContainer}>
              <Typography
                variant="body1"
                component="p"
                className={classes.freeShipping}
              >
                Free Shipping
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.allOrders}
              >
                on all orders over $75
              </Typography>
            </div>
          </div>
          <IconButton aria-label="cart" className={classes.cartIconButton}>
            <Badge
              badgeContent={3}
              color="primary"
              className={classes.cartBadge}
            >
              <ShoppingCartIcon className={classes.ShoppingCartIcon} />
            </Badge>
          </IconButton>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = ({ palette, breakpoints, spacing, typography }) => ({
  container: {
    width: "100%",
    boxShadow: "0px 2px 4px #f0f0f0",
    padding: "5px 15px",
    [breakpoints.up("sm")]: {
      padding: "15px 25px",
    },
  },
  headerTopContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 15px 5px 15px",
    [breakpoints.up("sm")]: {
      padding: "0px 20px 10px 20px",
    },
  },
  menuIcon: {
    display: "in-line",
    [breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    color: palette.primary.main,
    fontWeight: "800",
    fontSize: "30px",
  },
  freeShippingAndCartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  freeShippingContainer: {
    display: "none",
    [breakpoints.up(680)]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  truckIcon: {
    fontSize: "38px",
    color: palette.secondary.main,
  },
  freeShippingTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "0 15px",
    color: palette.secondary.main,
  },
  freeShipping: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  allOrders: {
    fontSize: "13px",
  },
  cartIconButton: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  ShoppingCartIcon: {
    fontSize: "35px",
    color: palette.secondary.main,
  },
  "@global": {
    '[class*="MuiBadge-badge"]': {
      border: `2px solid #ffffff`,
      padding: "7px 2px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "13px",
      [breakpoints.up("sm")]: {
        padding: "8px 4px",
        fontSize: "13px",
      },
      [breakpoints.up("md")]: {
        padding: "10px 6px",
        fontSize: "15px",
      },
    },
  },
});

export default withStyles(styles)(Header);
