import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../Images/HeroImage.png';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




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
       <div className={classes.root}>

       </div>
        
    );
}
export {HeroSection};