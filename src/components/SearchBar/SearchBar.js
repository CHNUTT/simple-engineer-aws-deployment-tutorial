import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

 const SearchBar =({classes}) => {
    return (
         <form className={classes.form} noValidate autoComplete="off">
            <InputBase
                className={classes.searchInput}
                placeholder="What are you looking for?"
                inputProps={{ 'aria-label': 'What are you looking for?' }}
            />
            <IconButton type="submit" className={classes.searchButton} aria-label="search">
                <SearchIcon className={classes.searchIcon} />
            </IconButton>
        </form>
    )
}

const styles = ({palette, breakpoints, spacing}) => ({
    form: {
         display: 'none',
        [breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent:'center',
            flex:1,
            margin: '0 15px',
            maxWidth: '800px',
            boxShadow: '0px 2px 4px #f0f0f0'
        }
    },
    searchInput: {
        padding: '8px',
        borderWidth: '1px 0px 1px 1px',
        borderColor: '#dedede',
        borderStyle: 'solid',
        height: '100%',
        width: '100%',
        fontSize: '15px',
        borderRadius: "3px 0 0 3px",
    },
    searchButton: {
        color:'#ffffff',
        borderRadius: "0 3px 3px 0",
        backgroundColor: palette.primary.main,
        padding: '7px 12px',
        maxWidth: '100%'
    },
    searchIcon: {
        fontSize: '30px',
    }
});


export default withStyles(styles)(SearchBar)
