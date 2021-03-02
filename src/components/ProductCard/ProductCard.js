import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import SaleTag from "./SaleTag";

const ProductCard = ({ product, classes }) => {
  let discount = 0;
  let finalPrice = product.price.toFixed(2);
  if (product.isOnSale) {
    discount = product.price * (product.salePercentage / 100);
    finalPrice = product.price - discount;
    finalPrice = finalPrice.toFixed(2);
  }

  return (
    <Card className={classes.container} variant="outlined">
      <div className={classes.detailsContainer}>
        <img
          alt="product"
          src={product.img}
          className={classes.img}
          data-testid="product_img"
        />
        {product.isOnSale && <SaleTag discount={discount.toFixed(2)} />}
        <Typography
          className={classes.name}
          variant="body2"
          component="p"
          gutterBottom
          data-testid="product_name"
        >
          {product.name}
        </Typography>
        <Typography
          className={classes.brand}
          variant="body2"
          component="p"
          gutterBottom
        >
          {product.brand}
        </Typography>
        {product.isOnSale && (
          <Typography
            className={classes.originalPrice}
            variant="body2"
            component="p"
            gutterBottom
          >
            ${product.price.toFixed(2)}
          </Typography>
        )}
        <Typography
          className={classes.finalPrice}
          variant="body2"
          component="p"
          gutterBottom
        >
          ${finalPrice}
        </Typography>
      </div>
      <div className={classes.btnContainer}>
        <Button
          //   onMouseOver={classes.delayBtn}
          className={classes.btnQuickShop}
          variant="outlined"
        >
          <Typography
            className={classes.btnQuickShopText}
            variant="h6"
            component="p"
          >
            Quick shop
          </Typography>
        </Button>
        <Button
          className={classes.btnChooseOption}
          variant="contained"
          color="primary"
        >
          <Typography
            className={classes.btnChooseOptionText}
            variant="h6"
            component="p"
          >
            Choose options
          </Typography>
        </Button>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const styles = ({ palette, breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    padding: "20px",

    [breakpoints.up("md")]: {
      "&:hover $btnContainer": {
        display: "flex",
      },
    },
    [breakpoints.down("sm")]: {
      width: "220px",
      height: "450px",
      display: "inline-flex",
    },
  },
  img: {
    width: "240px",
    alignSelf: "center",

    [breakpoints.down("sm")]: {
      width: "160px",
    },
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    padding: "5px",

    [breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  originalPrice: {
    color: palette.secondary.light,
    textAlign: "left",
    fontSize: "small",
    textDecoration: "line-through",
  },
  finalPrice: {
    color: palette.primary.main,
    textAlign: "left",
  },
  name: {
    color: palette.secondary.main,
    textAlign: "left",
    marginTop: "10px",
  },
  brand: {
    fontSize: "small",
    color: palette.secondary.light,
    textAlign: "left",
  },
  btnContainer: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100px",

    [breakpoints.up("md")]: {
      display: "none",
    },
    [breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },
  btnQuickShop: {
    marginTop: "25px",
    padding: "0 20px",
    height: "40px",

    [breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  btnQuickShopText: {
    textTransform: "capitalize",
    fontSize: "11px",
    fontWeight: 700,
    color: palette.primary.main,

    [breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  btnChooseOption: {
    marginTop: "25px",
    padding: "0 20px",
    height: "40px",

    [breakpoints.down("lg")]: {
      width: "100%",
      marginTop: "15px",
    },
  },
  btnChooseOptionText: {
    textTransform: "capitalize",
    color: "white",
    fontSize: "11px",
    fontWeight: 700,

    [breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  delayBtn: {
    transitionDelay: "70ms",
  },
});

export default withStyles(styles)(ProductCard);
