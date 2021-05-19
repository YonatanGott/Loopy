import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pad from './Pad';


const audioSrc = [{ src: '/audio/120_future_funk_beats_25.mp3', name: 'Future Funk' }, { src: '/audio/120_stutter_breakbeats_16.mp3', name: 'Stutter Breakbeats' }, { src: '/audio/Bass Warwick heavy funk groove on E 120 BPM.mp3', name: 'Heavy Funk Groove' }, { src: '/audio/electric guitar coutry slide 120bpm - B.mp3', name: 'Guitar Country Slide' }, { src: '/audio/FUD_120_StompySlosh.mp3', name: 'Stompy Slosh' }, { src: '/audio/GrooveB_120bpm_Tanggu.mp3', name: 'Groove' }, { src: '/audio/MazePolitics_120_Perc.mp3', name: 'Maze Politics' }, { src: '/audio/PAS3GROOVE1.03B.mp3', name: 'Pas3 Groove' }, { src: '/audio/SilentStar_120_Em_OrganSynth.mp3', name: 'Silent Star' }]


// Material UI component style
const useStyles = makeStyles(() => ({
    grid: {
        flexGrow: 1,
    },
}));

const NinePads = ({ getTracks, removeTrack }) => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
            className={classes.grid}
        >
            {
                audioSrc.map(track => {
                    return <Pad key={track.name} src={track.src} name={track.name} getTracks={getTracks} removeTrack={removeTrack} />
                })
            }
        </Grid>
    )
};
export default NinePads;