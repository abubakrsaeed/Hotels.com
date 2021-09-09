import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import { createTheme, makeStyles, ThemeProvider, withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FlagIcon from '@material-ui/icons/Flag';
import Divider from '@material-ui/core/Divider';
import ClearIcon from '@material-ui/icons/Clear';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    margin: 'auto',
    textAlign: 'left',
    maxWidth: '10%',
  },
  button: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: 'auto',
    width: 'auto',
    textTransform: 'none',
    fontSize: 16,
    color: '#D32F2F',
  },
  menuButton: {
    textTransform: 'none',
  },
  text: {
    fontSize: 13,
    marginLeft: 17,
  },

  inputRoot: {
    color: 'inherit',
  },
}));

const theme2 = createTheme({
  palette: {
    primary: {
      main: '#D32F2F',
    }
  }
})


const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: '25%'
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black
      }
    }
  }
}))(MenuItem);


function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    setOpen1(false);
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState('PKR');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [Flag, setFlag] = React.useState(value);

  const handleFlag = (event) => {
    setFlag(event.target.value);
  };

  const handleFlagOpen = () => {
    setOpen1(true);
  };





  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="white" elevation={0} >
        <ThemeProvider theme={theme2}>
          <Toolbar style={{ marginRight: '7%' }}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Hotels.com_logo.svg/1280px-Hotels.com_logo.svg.png" className={classes.logo} alt="Hotels.com"
              onClick={event => window.location.href = '/'}
              style={{ padding: '0px 33% 0px 0px' }} />




            <div>
              <Button className={classes.button} onClick={handleFlagOpen}><FlagIcon color='inherit' /><ArrowDropDownIcon color='inherit' /></Button>
              <Dialog open={open1} onClose={handleClose} style={{ width: '100%' }}>
                <DialogTitle><ClearIcon style={{ marginBottom: -5, marginRight: 20 }} onClick={handleClose} /><b>Our global sites</b></DialogTitle>
                <Divider />
                <DialogContent>
                  <RadioGroup onClick={handleClose}>
                    <FormControlLabel value="1" control={<Radio />} label="Argentina" />
                    <FormControlLabel value="2" control={<Radio />} label="Australia" />
                    <FormControlLabel value="3" control={<Radio />} label="Pakistan" />
                    <FormControlLabel value="4" control={<Radio />} label="Denmark" />
                    <FormControlLabel value="5" control={<Radio />} label="England" />
                    <FormControlLabel value="6" control={<Radio />} label="Egypt" />
                  </RadioGroup>
                </DialogContent>
              </Dialog>
            </div>




            <div>
              <Button className={classes.button} onClick={handleClickOpen}>{value}<ArrowDropDownIcon color='inherit' /></Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle><ClearIcon style={{ marginBottom: -5, marginRight: 20 }} onClick={handleClose} /><b>Select Currency</b></DialogTitle>
                <Divider />
                <DialogContent>
                  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} onClick={handleClose}>
                    <FormControlLabel value="USD" control={<Radio />} label="USD" />
                    <FormControlLabel value="GBP" control={<Radio />} label="GBP" />
                    <FormControlLabel value="PKR" control={<Radio />} label="PKR" />
                    <FormControlLabel value="DKK" control={<Radio />} label="DKK" />
                    <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
                    <FormControlLabel value="EGP" control={<Radio />} label="EGP" />
                  </RadioGroup>
                </DialogContent>
              </Dialog>
            </div>


            <div>
              <Button
                className={classes.button}
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Help <ArrowDropDownIcon />
              </Button>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={5}
              >
                <StyledMenuItem>
                  <ListItemText primary="Change your booking" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemText primary="FAQs" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemText primary="Contact us" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemText primary="Website feedback" />
                </StyledMenuItem>
                <p className={classes.text}> 24 hours a day; 7 days a week. </p>
                <p className={classes.text} style={{ marginTop: -10, marginBottom: -10 }}> Standard rates apply</p>
                <p className={classes.text}> Call us on 01 65 69 439 </p>
              </StyledMenu>
            </div>





            <Button className={classes.button} color='inherit' href='/'> <EventNoteIcon style={{marginRight: 8 }}/> Your bookings </Button>
            <Button className={classes.button} color='inherit' href='/signin'> Sign in </Button>


          </Toolbar>
        </ThemeProvider>
        <Toolbar style={{ marginTop: '-20px', marginLeft: '40px',  fontSize: 13 }}>
          <Grid container>
            <Grid item xs={5} sm={5} lg={5}>
          <Link style={{ marginRight: 25, color: '#333333' }}>Groups & Meetings</Link>
          
          <Link style={{ marginRight: 25, color: '#333333' }}>List your property</Link>
          
          <Link style={{ color: '#333333' }}>Hotels.com® Rewards</Link>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export { Header }
