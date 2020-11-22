import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Image from 'material-ui-image'
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { withRouter, useLocation} from 'react-router-dom';
import {Redirect, useHistory} from 'react-router-dom';






const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: theme.spacing(1),
    maxWidth: 160,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn() {
     const classes = useStyles();
     const history = useHistory();
     let location = useLocation();

function login(e) {
    e.preventDefault()
    let request = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    axios.post('http://localhost:3001/login', request)
    .then(resp => {
        if (resp.data == "Success"){
                if (location.pathname.includes("client")){
                    history.push("/pacient");
                } else {
                    //CAREFUL BRINGS TO SAME
                    history.push("/physio");
                }

            }
        })
        .catch(err => {
        console.log(err);
        })
    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
           <img src="/logo.png" alt="logo" className={classes.logo} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={(e) => login(e)} className={classes.form} Validate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" required/>}
            label="Accepta lo terminos y condiciones"
            //control={<Checkbox value="remember" color="primary" required/>}
            //label="Accept terms and conditions"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}

          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs >
                <Typography variant="body2" align="center">
                    <Link href="#" variant="body2" align="center">
                        Forgot password?
                      </Link>
                 </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}



export default withRouter(SignIn)
