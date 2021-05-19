import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion"


// Material UI component style
const useStyles = makeStyles(() => ({
    header: {
        margin: "2rem",
        fontFamily: "Bangers",
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Typography
            variant="h2"
            gutterBottom
            className={classes.header}
            component={motion.div}
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            transition={{ type: 'spring' }}
            whileHover={{ scale: 1.05 }}
        >
            Loop Machine
        </Typography>
    )
};
export default Header;