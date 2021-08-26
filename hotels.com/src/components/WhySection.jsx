import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Link from '@material-ui/core/Link';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        width: 'auto',
        textTransform: 'none',
        fontSize: 16,
    },
    text:{
        fontSize: 24,
    },
}));


function WhySection() {

    const classes = useStyles();


    return (

        <div>
         
                <Container maxWidth="lg" style={{marginTop: "30px"}}>
                    <Typography className={classes.text} variant="h2" align="left" style={{marginLeft: "-25px"}}>
                        <b>Why book with Hotels.com?</b>
                    </Typography>
                    <Grid container spacing={0} style={{ margin: '5px -35px 10px' }}>
                        <Grid item sm={4}>

                            <Card className={classes.root} elevation={0}>

                                <CardContent>

                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, color: '#218242' }}><EventAvailableRoundedIcon fontSize='medium' style={{ fontSize: 30, marginBottom: -13, marginRight: 15 }}></EventAvailableRoundedIcon>
                                        <b>Free cancellation</b>
                                    </Typography>
                                    <Typography variant="body2" component="p" align="left" style={{ marginLeft: 46, fontSize: 14 }}>
                                        on most hotels*</Typography>

                                </CardContent>

                            </Card>

                        </Grid>


                        <Grid item sm={4}>

                            <Card className={classes.root} elevation={0}>

                                <CardContent>

                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, color: '#063665' }}><CheckCircleRoundedIcon fontSize='large' style={{ fontSize: 30, marginBottom: -13, marginRight: 15 }}></CheckCircleRoundedIcon>
                                        <b>Our price guarantee</b>
                                    </Typography>
                                    <Typography variant="body2"  component="p" align="left" style={{ marginLeft: 46, fontSize: 14 }}>
                                        find out more <Link href="/"> <ChevronRightSharpIcon style={{ marginBottom: -7, marginLeft:-5, color: '#063665'}}/></Link></Typography>
                                </CardContent>

                            </Card>

                        </Grid>


                        <Grid item sm={4}>

                            <Card className={classes.root} elevation={0}>

                                <CardContent>

                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, color: '#7B1FA2' }}><NightsStayRoundedIcon fontSize='large' style={{ fontSize: 30, marginBottom: -13, marginRight: 15 }}></NightsStayRoundedIcon>
                                        <b>Get a reward night</b>
                                    </Typography>
                                    <Typography variant="body2" component="p" align="left" style={{ marginLeft: 46, fontSize: 14 }}>
                                        for every 10 nights you stay <Link href="/"><ChevronRightSharpIcon style={{ marginBottom: -7, marginLeft:-5, color: '#7B1FA2'}}/></Link></Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>



                </Container>

                <Divider style={{marginBottom:70, marginRight: 100, marginLeft: 150}}/>


        </div>

    )
}

export { WhySection };