import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../Images/HeroImage.png';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '80vh',
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
    },
}
))

const HeroSection = () => {

    const classes = useStyles();
    return (
<div>
        <Grid item lg={12} className={classes.root}>
       </Grid>
       </div>
        
    );
}
export {HeroSection};