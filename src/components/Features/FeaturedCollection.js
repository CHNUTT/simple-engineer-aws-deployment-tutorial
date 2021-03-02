import React from "react";
import ProductCard from "../ProductCard";
import ProductData from "../ProductCard/ProductData";
import SectionTitle from "../SectionTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import FeaturedCollectionSecond from "./FeaturedCollectionSecond";
// import Card from '@material-ui/core/Card';

const FeaturedCollection = ({ classes }) => {
  return (
    <div className={classes.container}>
      <SectionTitle title="Featured Collection"/>
      <div className={classes.cardsContainer}>
        {ProductData.map((product, index) => {
          if (index !== ProductData.length - 1)
            return <ProductCard product={product} key={index} />;
          else return null;
        })}
      </div>
      <div className={classes.cardsContainerBottom}>
        <FeaturedCollectionSecond
          product={ProductData[ProductData.length - 1]}
        />
      </div>
    </div>
  );
};

const styles = ({ palette, breakpoints }) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "column",

    [breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
    width: "100%",
    height: "500px",

    // "&hover": {
    //     height: "1200px",
    //     position: "absolute",
    //     zIndex: 1
    // },
    [breakpoints.down("sm")]: {
      overflowX: "scroll",
    },
  }
});

export default withStyles(styles)(FeaturedCollection);
