import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FeaturedCard from './FeaturedCard';
import featureCategoryData from '../../assets/staticData/featuredCategoryData';
// import imageUrl from '../../assets/img/home_page/living-room_1350x636.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

// TODO: breakpoint at 720px - revise at <Grid>sm={}
const FeaturedCategories = () => {
    const classes = useStyles();
    const categoryStyleOptions = [
        {size: 8, card: 'BW'},
        {size: 4, card: 'default'},
        {size: 4, card: 'default'}, 
        {size: 8, card: 'TG'}
    ]

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {categoryStyleOptions.map((styleOption, idx) => (
                    <Grid item 
                    key={ featureCategoryData[idx].id }
                    xs={12}
                    sm={12} 
                    // tabletTen={styleOption.size} 
                    md={styleOption.size}
                    >
                        <FeaturedCard 
                            featureData={ featureCategoryData[idx] } 
                            featureStyle={ styleOption.card }
                        />
                    </Grid>
                ))}
            </Grid> 
        </div>
    )
}

export default FeaturedCategories;
