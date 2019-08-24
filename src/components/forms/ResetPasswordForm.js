import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../../styling/forms/ResetPasswordForm.css';

class ResetPasswordForm extends Component {
  /**
   * Send data back to the parent to change forms.
   */
  handleSignup = () => {
    this.props.onDataChanged("signingUp");
  }
  handleLoggingIn = () => {
    this.props.onDataChanged("loggingIn");
  }
  
    render () {
        return(
            <div>
              <Typography component="h1" variant="h5">
                Reset password
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={"submit"}
                >
                  Reset Password
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={this.handleLoggingIn} variant="body2">
                      Have an account? Login
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={this.handleSignup} variant="body2">
                      {"No account? Sign Up"}
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

export default ResetPasswordForm;