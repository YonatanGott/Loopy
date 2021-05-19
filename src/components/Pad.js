import React, { useState } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrow';
import StopRoundedIcon from '@material-ui/icons/Stop';
import { motion } from "framer-motion"

// Material UI component style
const useStyles = makeStyles(() => ({
    icon: {
        fontSize: "6rem"
    },
    title: {
        fontFamily: "Roboto",
    },
    paperActive: {
        backgroundColor: "#00e5ff",
    },
    paper: {
        backgroundColor: "#eceff1"
    }
}));

const variants = {
    off: {
        rotateY: [0, 180, 0],
        transition: {
            ease: "easeInOut",
            duration: 1
        },
    },
    flip: {
        rotateY: [180, 0],
        transition: {
            ease: "easeInOut",
            duration: 0.5
        },
    }
}

const Pad = ({ track, getTracks, removeTrack }) => {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false)
    const [flip, setFliped] = useState(false)


    const handleClickedOn = () => {
        setFliped(true)
        setClicked(true)
        getTracks(track)
    }
    const handleClickedOff = () => {
        setFliped(false)
        setClicked(false)
        removeTrack(track)
    }

    return (
        <Grid item xs={4}
            component={motion.div}
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            transition={{ type: 'spring' }}
            whileHover={{ scale: 1.07 }}>
            <Paper
                elevation={3}
                className={clicked ? classes.paperActive : classes.paper}
                component={motion.div}
                animate={flip ? "flip" : "off"}
                variants={variants}
            >
                {
                    clicked ?
                        <StopRoundedIcon className={classes.icon} onClick={handleClickedOff} />
                        :
                        <PlayArrowRoundedIcon className={classes.icon} onClick={handleClickedOn} />
                }
                <Typography className={classes.title} variant="h5" display="block" gutterBottom>
                    {track.name}
                </Typography>
            </Paper>
        </Grid>
    )
};
export default Pad;