import React from 'react';
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion"


// Material UI component style
const useStyles = makeStyles(() => ({
    paper: {
        marginRight: "1rem",
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "#ffe082 ",
    },
    grid: {
        marginTop: "2rem"
    },
    playing: {
        marginRight: "1rem",
        fontFamily: "Bangers",
    }
}));

const Record = ({ trackList }) => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.grid}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            {
                trackList.length > 0 &&
                (<Typography variant="h4" className={classes.playing} >
                    Playing:
                </Typography>)
            }
            {
                trackList.map(track => {
                    return <Paper key={track.name} elevation={3} className={classes.paper}
                        component={motion.div}
                        initial={{ x: "-100vh" }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring' }}
                        whileHover={{ scale: 1.03 }} >
                        <Typography variant="h6" >
                            {track.name}
                        </Typography>
                    </Paper>
                })
            }
        </Grid>
    )
};
export default Record;