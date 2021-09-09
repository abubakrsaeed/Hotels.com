import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import OpacityIcon from '@material-ui/icons/Opacity';
import CardMedia from '@material-ui/core/CardMedia';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontSize: 24,
    },
    media: {
        height: 200,
        width: 350,
    },
    media2: {
        height: 21,
        width: 250,
    },
    button: {
        width: '112px',
        fontSize: 15,
        padding: '10px',
        margin: theme.spacing(1),
        borderRadius: "5em",
        backgroundColor: '#156bc1',
        color: 'white'
    },
}));


function SafetySection() {

    const classes = useStyles();


    return (

        <div>

            <Container maxWidth="lg">

                <Grid container>
                    <Grid item md={12}>
                <Typography className={classes.text} variant="h2" align="left">
                    <b>Travel with confidence</b>
                </Typography>
                <Typography variant="body1" align="left" style={{ marginTop: 10, color: '#333333', fontSize: 17 }}>
                    Many properties have updated us about their enhanced health and safety measures. So, during your search, you may find details like:
                </Typography>
                </Grid>
                </Grid>


                <Grid container style={{ margin: '5px -20px 10px' }}>
                    <Grid item md={6}>

                        <Card className={classes.root} elevation={0}>

                            <CardContent>

                                <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}><VerifiedUserIcon fontSize='medium' style={{ fontSize: 30, marginBottom: -13, marginRight: 15 }}></VerifiedUserIcon>
                                    <b>Official health standards</b>
                                </Typography>
                                <Typography variant="body2" component="p" align="left" style={{ marginLeft: 46, fontSize: 14 }}>
                                    Properties adhering to corporate/organisational sanitisation guidelines.</Typography>

                            </CardContent>

                        </Card>

                    </Grid>


                    <Grid item sm={12} md={6}>

                        <Card className={classes.root} elevation={0}>

                            <CardContent>

                                <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}><CheckCircleRoundedIcon fontSize='large' style={{ fontSize: 30, marginBottom: -13, marginRight: 15 }}></CheckCircleRoundedIcon>
                                    <b>Social distancing</b>
                                </Typography>
                                <Typography variant="body2" component="p" align="left" style={{ marginLeft: 46, fontSize: 14 }}>
                                    Contactless check-in and check-out along with other social distancing measures.</Typography>
                            </CardContent>

                        </Card>

                    </Grid>


                    <Grid item sm={12} md={6}>

                        <Card className={classes.root} elevation={0}>

                            <CardContent>

                                <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}><OpacityIcon fontSize='large' style={{ fontSize: 30, marginBottom: -13, marginRight: 15 }}></OpacityIcon>
                                    <b>Hygiene and sanitisation</b>
                                </Typography>
                                <Typography variant="body2" component="p" align="left" style={{ marginLeft: 46, fontSize: 14 }}>
                                    The use of disinfectant and whether properties enforce a gap period between stays.</Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item sm={12} md={6}>

                        <Card className={classes.root} elevation={0}>

                            <CardContent>

                                <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}><FreeBreakfastIcon fontSize='large' style={{ fontSize: 30, marginBottom: -13, marginRight: 15 }}></FreeBreakfastIcon>
                                    <b>Essentials at the property</b>
                                </Typography>
                                <Typography variant="body2" component="p" align="left" style={{ marginLeft: 46, fontSize: 14 }}>
                                    Free hand sanitiser for guests and individually wrapped food options.</Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Divider style={{ marginBottom: 25, marginRight: 100, marginLeft: 150 }} />

            <Container maxWidth="md">
                <Grid container style={{ margin: '5px' }}>
                    <Grid item md={6}>

                        <Card className={classes.root} elevation={0}>

                            <CardContent>

                                <CardMedia
                                    style={{ marginLeft: "50px" }}
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/kesstatic/f6d44ef153d84fa217f3.svg"
                                />
                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item md={6}>

                        <Card className={classes.root} elevation={0}>

                            <CardContent>
                                <CardMedia
                                    style={{ marginTop: "20px" }}
                                    className={classes.media2}
                                    image="https://a.cdn-hotels.com/kesstatic/16cb9904184e8e153945.png"
                                />

                            </CardContent>
                            <Typography align="left" style={{ marginBottom: "5px", marginTop: 20 }}><CheckIcon style={{ marginBottom: -7, marginRight: 5 }} /><b>Unlock Secret Prices!</b> You could get 10% off</Typography>
                            <Typography align="left" style={{ marginBottom: "5px" }}><CheckIcon style={{ marginBottom: -7, marginRight: 5 }} /><b>Get 1 reward night*</b> for every 10 nights you stay</Typography>
                            <Typography align="left" style={{ marginBottom: "5px" }}><CheckIcon style={{ marginBottom: -7, marginRight: 5 }} /><b>Rack up rewards</b> in over 1,000,000 properties worldwide</Typography>
                        </Card>
                        <div style={{ marginRight: '47%' }}>
                            <Button variant="contained" className={classes.button}><b>Join now</b></Button>
                            <Button style={{ color: '#156bc1', width: '112px', fontSize: 16, }}><b>Sign in</b></Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Divider style={{ marginBottom: 30, marginRight: 100, marginLeft: 150 }} />

        </div>

    )
}

export { SafetySection };