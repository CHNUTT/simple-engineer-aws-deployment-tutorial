import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FeaturedCard from './FeaturedCard';
import featuredSaleData from '../../assets/staticData/featuredSaleData';
import SectionTitle from '../SectionTitle';

const useStyles = makeStyles(({palette,breakpoints}) => ({
    root: {
      flexGrow: 1,
    },
}));

const FeaturedSales = () => {
    const classes = useStyles();
    const saleStyleOptions = [
        {size: 12, card: 'CT'},
        {size: 6, card: 'TR'},
        {size: 6, card: 'TR'}, 
    ]

    return (
        <div className={classes.root}>
            <SectionTitle title="Save Big On Popular Design"/>

            <Grid container spacing={2}>
                {saleStyleOptions.map((styleOption, idx) => (
                    <Grid item 
                        key={ featuredSaleData[idx].id }
                        sm={ styleOption.size } 
                        xs={12}
                        // className=" "// use breakpoint in this class
                    >
                        <FeaturedCard 
                            featureData={ featuredSaleData[idx] } 
                            featureStyle={ styleOption.card }
                        />
                </Grid>
                ))}
            </Grid> 
        </div>
    )
}

export default FeaturedSales;
