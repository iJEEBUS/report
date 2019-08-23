import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../../styling/SignUpFormStyle.css';

class SignUpForm extends Component {
  /**
  * Send data back to the parent to change forms.
  */
  handleLoggingIn = () => {
    this.props.onDataChanged("loggingIn");
  }
  handlePasswordReset = () => {
    this.props.onDataChanged("forgotPassword");
  }

    render () {
        return(
            <div>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={"form"} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
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
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="first_name"
                  label="Last Name"
                  name="last_name"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={"submit"}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={this.handlePasswordReset} variant="body2">
                      Forgot Password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={this.handleLoggingIn} variant="body2">
                      {"Already have an account? Login"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        AIHPI
                    </Link>{' '}
                    {new Date().getFullYear()}
                </Typography>
                </Box>
              </form>
              </div>
        );
    }
}

export default SignUpForm;