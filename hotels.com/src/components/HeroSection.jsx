import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../Images/HeroImage.png';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '80vh',
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
    }
}
))

const HeroSection = () => {

    const classes = useStyles();
    return (
        <section className={classes.root}>

        </section>
    );
}
export {HeroSection};