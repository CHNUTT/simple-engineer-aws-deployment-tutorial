import React from "react";
import FeaturedCollection from "./FeaturedCollection";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedSales from "./FeaturedSales";
import withStyles from "@material-ui/core/styles/withStyles";

const Features = ({ classes }) => {
  return (
    <div className={classes.container}>
      <FeaturedCategories />
            <FeaturedSales />
      <FeaturedCollection />
    </div>
  );
};

const styles = ({ palette, breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

export default withStyles(styles)(Features);
