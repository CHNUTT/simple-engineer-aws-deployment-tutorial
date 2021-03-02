import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SaleTag from "../ProductCard/SaleTag";
import SocialIcon from "../ProductCard/SocialIcon";

const quantity = [];
for (let i = 1; i <= 10; i++) {
  quantity.push(i);
}

const color = ["White"];

const FeaturedCollectionSecond = ({ product, classes }) => {
  let discount = 0;
  let finalPrice = product.price.toFixed(2);
  if (product.isOnSale) {
    discount = product.price * (product.salePercentage / 100);
    finalPrice = product.price - discount;
  }

  return (
    <Card className={classes.bigContainer} variant="outlined">
      <div className={classes.leftContainer}>
        <img
          alt="white speaker"
          className={classes.img}
          src="https://cdn.shopify.com/s/files/1/2111/1121/products/Lenny_Wireless_Speaker_White_1000x1000.jpg?v=1569030648"
        />
      </div>
      <div className={classes.rightContainer}>
        <Typography className={classes.nameTitle} variant="subtitle2">
          {product.name}
        </Typography>
        <Typography className={classes.brand} variant="body2">
          {" "}
          by{" "}
          <a href="/" className={classes.link}>
            {product.brand}
          </a>
        </Typography>
        <div className={classes.priceContainer}>
          {product.isOnSale && (
            <>
              <SaleTag discount={discount.toFixed(2)} />

              <Typography
                className={classes.originalPrice}
                variant="body2"
                component="p"
              >
                ${product.price.toFixed(2)}
              </Typography>
            </>
          )}
          <Typography
            className={classes.finalPrice}
            variant="body2"
            component="p"
          >
            ${finalPrice}
          </Typography>
        </div>
        <Typography
          className={classes.chooseColor}
          variant="body2"
          component="p"
        >
          Color: {color}
        </Typography>
        <div className={classes.btnContainer}>
          <FormControl variant="outlined" className={classes.quantityContainer}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Quantity
            </InputLabel>
            <Select
              className={classes.btnSelect}
              native
              value={1}
              onChange={(e) => console.log(e.target.value)}
              label="Quantity"
              inputProps={{
                name: "Quantity",
                id: "outlined-age-native-simple",
              }}
            >
              {quantity.map((quantity, index) => (
                <option value={quantity} key={index}>
                  {quantity}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            className={classes.btnAddToCart}
            variant="contained"
            color="primary"
          >
            <Typography
              className={classes.btnAddToCartText}
              variant="subtitle2"
              component="p"
            >
              Add to cart
            </Typography>
          </Button>
        </div>
        <a href="/" className={classes.link}>
          <Typography className={classes.fullDetailText} variant="body2">
            View full detail
          </Typography>
        </a>
        <SocialIcon />
      </div>
    </Card>
  );
};

FeaturedCollectionSecond.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = ({ palette, breakpoints }) => ({
  bigContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    width: "100%",

    [breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [breakpoints.down("sm")]: {
      maxWidth: "50%",
    },
  },
  img: {
    maxWidth: "600px",

    [breakpoints.down("md")]: {
      maxWidth: "550px",
      marginTop: "30px",
    },
    [breakpoints.down("xs")]: {
      maxWidth: "450px",
    },
  },
  rightContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "65px",

    [breakpoints.down("sm")]: {
      width: "50%",
    },
    [breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  nameTitle: {
    fontSize: 27,
    fontWeight: 900,
    color: palette.secondary.main,

    [breakpoints.down("sm")]: {
      fontSize: 23,
      fontWeight: 900,
    },
  },
  brand: {
    color: palette.secondary.light,
    marginTop: "8px",

    [breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  chooseColor: {
    marginTop: "16px",
    fontSize: 13,
    fontWeight: 600,

    [breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  fullDetailText: {
    [breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
  textDiscount: {
    textDecoration: "line-through",
  },
  priceContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  originalPrice: {
    color: palette.secondary.light,
    textAlign: "left",
    textDecoration: "line-through",
    marginRight: "15px",
    fontSize: 20,
    fontWeight: 400,
  },
  finalPrice: {
    color: palette.primary.main,
    textAlign: "left",
    fontSize: 20,
    fontWeight: 400,
  },
  btnContainer: {
    marginTop: "20px",
    width: "100%",

    [breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  btnSelect: {
    height: "37px",
    padding: "6px",

    [breakpoints.down("sm")]: {
      width: "110px",
      height: "47px",
    },
  },
  btnAddToCart: {
    backgroundColor: palette.primary.main,
    width: "50%",
    textTransform: "capitalize",
    fontWeight: 700,
    marginLeft: "25px",
    marginBottom: "25px",

    [breakpoints.down("sm")]: {
      width: "300px",
      height: "47px",
      marginLeft: "10px",
    },
  },
  btnAddToCartText: {
    [breakpoints.down("sm")]: {
      textTransform: "None",
      fontWeight: 600,
    },
  },
  link: {
    color: palette.primary.main,
  },
});

export default withStyles(styles)(FeaturedCollectionSecond);
