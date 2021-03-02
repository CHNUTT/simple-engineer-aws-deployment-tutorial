import React from 'react'
import Features from '../../components/Features'
import withStyles from '@material-ui/core/styles/withStyles';

const Home = ({classes}) => {
    return (
        <div className={classes.container}>
            <Features />
        </div>
    )
}

const styles =({palette, breakpoints}) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%"
    }
})

export default  withStyles(styles)(Home);
