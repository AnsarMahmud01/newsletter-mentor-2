import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import photo from '../../images/illustration-sign-up-desktop.svg'
import check from '../../images/icon-list.svg'
import icon from '../../images/icon-success.svg'
import "./SignUp.css"
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    maxWidth: 500,
    margin: '100px auto',
    borderRadius: "20px !important"
  },
  left: {
    flex: 1,
    padding: '30px',
  },
  right: {
    flex: 1,
    padding: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '5px',
  },
}));

const CardComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.left}>
        <CardContent>
          <Typography variant="h2" component="h2" gutterBottom sx={{fontWeight: "700"}}>
          <img src={icon} alt="" />
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom sx={{fontWeight: "700"}}>
          Thanks for subscribing!
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{width: "400px", marginBottom: "40px"}}>
            A confirmation email has been sent to ash@loremcompany.com. 
            Please open it and click the button inside to confirm your subscription.
          </Typography>
          <Link to="/" sx={{color: "black"}}>
          <Button className='hover' variant="contained" color="primary" fullWidth sx={{backgroundColor: "hsl(234, 29%, 20%)", fontSize:"12px", padding:"20px"}}>
            Dismiss message
          </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
};

export default CardComponent;
