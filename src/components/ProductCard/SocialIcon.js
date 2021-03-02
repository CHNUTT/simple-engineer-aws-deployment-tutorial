import React from "react"
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { SiPinterest } from "react-icons/si";
import {FaFacebook} from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineInstagram} from "react-icons/ai";


const SocialIcon = ({classes}) => {
    return(
        <div className={classes.container}>
            <Typography className={classes.shareText} variant="subtitle2">Share this:</Typography>
            <ul className={classes.iconContainer}>
                <IconButton className={classes.iconItem}>
                    <li className={classes.icon}><FaFacebook color='#435DAB' size='23px'/></li>
                </IconButton>
                <IconButton className={classes.iconItem}>
                    <li className={classes.icon}><AiFillTwitterCircle color='#0077B5' size='27px'/></li>
                </IconButton>
                <IconButton className={classes.iconItem}>
                    <li className={classes.icon}><AiOutlineInstagram className={classes.iconIg} color='#ffffff' size='23px' border-radius='50%'/></li>
                </IconButton>
                <IconButton className={classes.iconItem}>
                    <li className={classes.icon}><SiPinterest color='#BD1C1B' size='23px' /></li>
                </IconButton>
            </ul>
        </div>
    )
}

const styles = ({palette, breakpoints}) => ({
    container: {
        marginTop: "5px",
        marginBottom: "20px"
    },
    iconContainer: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        [breakpoints.down('sm')]: {
            marginTop: "10px"
        }
    },
    icon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    iconIg: {
        backgroundImage: "linear-gradient(to bottom right, purple, red, purple)",
        borderRadius: "50%"
    },
    shareText: {
        marginTop: "30px",
        fontSize: "14px",
        fontWeight: 600,

        [breakpoints.down('sm')]: {
            marginTop: "15px",
            fontSize: 14,
        }
    },
    iconItem: {
        padding: 0,
        marginTop: "10px",
        marginRight: "9px",

        [breakpoints.down('sm')]: {
            marginTop: 0,
        }
    }
})

export default withStyles(styles)(SocialIcon)