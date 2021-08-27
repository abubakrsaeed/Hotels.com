import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        width: '112px',
        fontSize: 15,
        padding: '12px',
        margin: theme.spacing(1),
        borderRadius: "5em",
        color: '#156bc1',
        marginBottom: '20px',
    },
    text: {
        fontSize: 24,
    },
    root: {
        maxWidth: 330,
    },
    media: {
        height: 330,
        width: 330,
    },
}));


function PropertySection() {

    const classes = useStyles();


    return (

        <div>

            <Container maxWidth="lg" style={{ marginTop: "-50px" }}>
                <Typography className={classes.text} variant="h2" align="left" style={{ marginLeft: "-25px" }}>
                    <b>A snapshot of the world’s most picture-perfect properties</b>
                </Typography>
                <Typography variant="body1" align="left" style={{ marginLeft: "-25px", marginTop: 10, color:'#333333', fontSize: 17 }}>
                    Check out some of our favourite unique stays
                </Typography>



            </Container>




            <Container maxWidth="xl" style={{ marginTop: 15 }}>


                <Grid container spacing={0} align="center">
                    <Grid item sm={3} style={{marginLeft: 135}}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea href='/cardPage'>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}>
                                        <b>TreeHouse Villas</b>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" align="left" style={{ fontSize: 15 }}>
                                        Thailand
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>

                    </Grid>


                    <Grid item sm={3} style={{ marginLeft: -65 }}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/explorepatagonia.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}>
                                        <b>Explora Patagonia</b>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" align="left" style={{ fontSize: 15 }}>
                                        Chile
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>

                    </Grid>


                    <Grid item sm={3} style={{ marginLeft: -65 }}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/grandmiramarallluxurysuitesandresidences.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}>
                                        <b>Grand Miramar</b>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" align="left" style={{ fontSize: 15 }}>
                                        Mexico
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>

                    <Grid item sm={3} style={{marginLeft: -65}}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/kakslauttanenarcticresort.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}>
                                        <b>Kakslauttanen Arctic Resort</b>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" align="left" style={{ fontSize: 15 }}>
                                        Finland
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>



                </Grid>
            </Container>

<Button variant="outlined" className={classes.button}> <b>See more</b> </Button>


            <Divider style={{ marginBottom: 25, marginRight: 100, marginLeft: 150 }} />


        </div>

    )
}

export { PropertySection };