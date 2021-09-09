import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(5),
        color: '#156bc1',
        fontSize: 14,
    },
    expand:{
        color: '#156bc1'
    },
    logo: {
        margin: 'auto',
        marginRight: '53%',
        marginTop: '15px',
        maxWidth: '10%',
      },
      text: {
          fontSize: '13px',
          color: '#525252',
          marginLeft: '25px',
      }
}));

function Footer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);

    };
    const handleClick4 = () => {
        setOpen4(!open4);

    };

    return (
        <Container maxWidth="lg" style={{marginLeft:"9%"}}>
            <List
                className={classes.root}
            >
                <ListItem button onClick={handleClick} >
                    {open ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
                    <ListItemText style={{color: '#525252'}} primary="Top destinations" />
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Grid container spacing={10}>
                            <Grid item sm={6}>
                            <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                            </Grid>

                            <Grid item sm={6} style={{ marginLeft: -100 }}>
                            <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                </Collapse>
            </List>

            <List
                className={classes.root}
            >
                <ListItem style={{marginTop: -10}} button onClick={handleClick1}>
                    {open1 ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
                    <ListItemText style={{color: '#525252'}} primary="Top Countries & Regions" />
                </ListItem>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Grid container spacing={10}>
                            <Grid item sm={6}>
                            <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                            </Grid>

                            <Grid item sm={6} style={{ marginLeft: -100 }}>
                            <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    Hotels in Pakistan
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                </Collapse>
            </List>

            <List
                className={classes.root}
            >
                <ListItem style={{marginTop: -10}} button onClick={handleClick2}>
                    {open2 ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
                    <ListItemText style={{color: '#525252'}} primary="Support & FAQs" />
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Grid container spacing={10}>
                            <Grid item sm={6}>
                                <ListItem button className={classes.nested}>
                                Your bookings
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                FAQs
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                Contact us
                                </ListItem>
                            </Grid>

                            <Grid item sm={6} style={{ marginLeft: -100 }}>
                                <ListItem button className={classes.nested}>
                                Website feedback
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                Review a property
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                </Collapse>
            </List>

            <List
                className={classes.root}
            >
                <ListItem style={{marginTop: -10}} button onClick={handleClick3}>
                    {open3 ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
                    <ListItemText style={{color: '#525252'}} primary="For suppliers, affiliates and the media" />
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Grid container spacing={10}>
                            <Grid item sm={6}>
                                <ListItem button className={classes.nested}>
                                Affiliate with us
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                Expedia Partner Solutions
                                </ListItem>
                            </Grid>

                            <Grid item sm={6} style={{ marginLeft: -100 }}>
                                <ListItem button className={classes.nested}>
                                Promote with us
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                Travel agents
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                </Collapse>
            </List>

            <List
                className={classes.root}
            >
                <ListItem style={{marginTop: -10}} button onClick={handleClick4}>
                    {open4 ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
                    <ListItemText style={{color: '#525252'}} primary="User terms & Privacy" />
                </ListItem>
                <Collapse in={open4} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Grid container spacing={10}>
                            <Grid item sm={6}>
                                <ListItem button className={classes.nested}>
                                Terms & Conditions (excluding Vrbo bookings
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                Vrbo Terms & Conditions
                                </ListItem>
                            </Grid>

                            <Grid item sm={6} style={{ marginLeft: -100 }}>
                                <ListItem button className={classes.nested}>
                                Privacy
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                Cookies
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                </Collapse>

<div style={{marginLeft: 8}}>
                <ListItem button>
        <ListItemText style={{color: '#525252'}} primary="Website feedback" />
      </ListItem>
      <ListItem button>
        <ListItemText style={{color: '#525252'}} primary="About us" />
      </ListItem>
      <ListItem button>
        <ListItemText style={{color: '#525252'}} primary="List your property" />
      </ListItem>
      <ListItem button>
        <ListItemText style={{color: '#525252'}} primary="Careers" />
      </ListItem>
      <ListItem button>
        <ListItemText style={{color: '#525252'}} primary="Travel Guides" />
      </ListItem>
      <ListItem button>
        <ListItemText style={{color: '#525252'}} primary="Site index" />
      </ListItem>
      </div>
            </List>

            <div style={{marginBottom: '15px'}}>
            <img src="https://a.cdn-hotels.com/kesstatic/3fdde48fcdd669e08354.svg" className={classes.logo} alt=""
              style={{ padding: '0px 33% 0px 0px' }} />
              <Typography className={classes.text} align="left"> * Some hotels require you to cancel more than 24 hours before check-in. Details on site. </Typography>
              <Typography className={classes.text} align="left"> * The value of 1 reward night is the average price of the 10 stamps you collect.
                   Excludes taxes and fees. A GBP4.00 redemption fee is charged for each
                   </Typography>
                   <Typography className={classes.text} align="left"> reward night redeemed unless you redeem on our app. Exclusions apply. </Typography>
                   <Typography align="left" style={{ padding: '7px', fontSize: '13px', marginLeft: '18px', color: '#525252' }}> © 2021 Hotels.com is an Expedia Group company. All rights reserved. </Typography>
                   <Typography className={classes.text} align="left"> Hotels.com and the Hotels.com logo are trademarks or registered trademarks of Hotels.com, LP in the United States and/ or other countries. All other</Typography>
                   <Typography className={classes.text} align="left">trademarks are the property of their respective owners.</Typography>                  

            </div>
        </Container>
    );
}
export { Footer }