import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import photo from '../../images/illustration-sign-up-desktop.svg'
import check from '../../images/icon-list.svg'
import "./SignUp.css"
import Dialog from './Succeess'
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    maxWidth: 1000,
    margin: '100px auto',
    borderRadius: "20px !important"
  },
  left: {
    flex: 1,
    padding: '40px',
  },
  right: {
    flex: 1,
    padding: '30px',
  },
  image: {
    width: '100%',
    borderRadius: '5px',
  },
}));

const CardComponent = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleClick = () => {
    if (email.trim() === '' || !isValidEmail(email)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      // Perform other actions or navigate to the success page
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Card className={classes.card}>
      <div className={classes.left}>
        <CardContent>
          <Typography variant="h2" component="h2" gutterBottom sx={{fontWeight: "700"}}>
          Stay updated!
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{width: "400px"}}>
          Join 60,000+ product managers receiving monthly updates on:
          </Typography>
          <List sx={{marginBottom: "20px"}}>
            <ListItem>
                <img src={check} alt="" />
              <ListItemText primary="Product discovery and building what matters" sx={{paddingLeft:"20px"}}/>
            </ListItem>
            <ListItem>
            <img src={check} alt="" />
              <ListItemText primary="Measuring to ensure updates are a success" sx={{paddingLeft:"20px"}}/>
            </ListItem>
            <ListItem>
            <img src={check} alt="" />
              <ListItemText primary="And much more!" sx={{paddingLeft:"20px"}}/>
            </ListItem>
          </List>
          <label htmlFor="input-field" style={{fontWeight: "700"}}>Email address:</label>
          <TextField id="input-field" variant="outlined" type='email'  fullWidth sx={{marginTop:"10px", marginBottom:"20px"}} value={email} error={!isValid}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValid(true);
            }}/>
          <Button className='hover' variant="contained" color="primary" fullWidth sx={{backgroundColor: "hsl(234, 29%, 20%)", fontSize:"12px", padding:"15px"}} onClick={handleClick}>
          <Link to="/success" style={{fontSize:"12px", color:"white", textDecoration: "none"}}>
            Subscribe to monthly newsletter
          </Link>
          </Button>
        </CardContent>
      </div>
      <div className={classes.right}>
        <img src={photo} alt="Card Image" className={classes.image} />
      </div>
    </Card>
  );
};

export default CardComponent;
