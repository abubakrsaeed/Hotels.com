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
        height: 120,
        width: 200,
    },
}));


function PlacesSection() {

    const classes = useStyles();


    return (

        <div>

            <Container maxWidth="lg">
                <Typography className={classes.text} variant="h2" align="left" style={{ marginLeft: "-35px" }}>
                    <b>We do more than just hotels...</b>
                </Typography>

            </Container>




            <Container maxWidth="xl" style={{ marginTop: 15 }}>


                <Grid container spacing={0} align="center">
                    <Grid item sm={2} style={{marginLeft: 135}}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea href='/cardPage'>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/holiday_homes.jpg?impolicy=fcrop&w=188&h=106&q=high"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, marginLeft: 22 }}>
                                        <b>Holiday homes</b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>

                    </Grid>


                    <Grid item sm={2} style={{ marginLeft: -50 }}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/apartments.jpg?impolicy=fcrop&w=188&h=106&q=high"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, marginLeft: 22 }}>
                                        <b>Apartments</b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>

                    </Grid>


                    <Grid item sm={2} style={{ marginLeft: -50 }}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/hotels.jpg?impolicy=fcrop&w=188&h=106&q=high"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, marginLeft: 22 }}>
                                        <b>Hotels</b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>

                    <Grid item sm={2} style={{marginLeft: -50}}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/resorts.jpg?impolicy=fcrop&w=188&h=106&q=high"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, marginLeft: 22 }}>
                                        <b>Resorts</b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>

                    <Grid item sm={2} style={{marginLeft: -50}}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/hostels.jpg?impolicy=fcrop&w=188&h=106&q=high"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, marginLeft: 22 }}>
                                        <b>Hostels</b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>

                    <Grid item sm={2} style={{marginLeft: -50}}>

                        <Card className={classes.root} elevation={0}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/country_retreats.jpg?impolicy=fcrop&w=188&h=106&q=high"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, marginLeft: 22 }}>
                                        <b>Country retreats</b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>



                </Grid>
            </Container>
            <Divider style={{ marginBottom: 5, marginRight: 100, marginLeft: 150 }} />


        </div>

    )
}

export { PlacesSection };