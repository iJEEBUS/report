import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../../styling/forms/ResetPasswordForm.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Firebase from '../../firebase';

class ResetPasswordForm extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailSent: false,
      error: null,
    }
  }


  /**
   * Send data back to the parent to change forms.
   */
  handleSignup = () => {
    this.setState({ emailSent : false });
    this.props.onDataChanged("signingUp");
  }
  handleLoggingIn = () => {
    this.setState({ emailSent : false });
    this.props.onDataChanged("loggingIn");
  }
  handleFormChange = (e) => {
    this.props.onDataChanged(e.target.name)
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Firebase.auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        this.setState({ emailSent : true});
      })
      .catch((err) => {
        alert(err);
      })
    }
  
    render () {

      const isInvalid = this.state.email === '';

      if (this.state.emailSent) {

        return(
          <div>
            <Typography component="h1" variant="h4">
              Success!
            </Typography>
            <Typography component="h5" variant="h5">
              Check your email for a link to reset your password.
            </Typography>
            <Link onClick={this.handleFormChange} name="loggingIn" variant="body2">
              Login
            </Link>
          </div>
        );

      } else {
        return(
          <div>
            <Typography component="h1" variant="h5">
              Reset password
            </Typography>
            <form className={"form"} noValidate onSubmit={this.handleSubmit}>
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
                onChange={this.onChange}
              />
              <Button
                disabled={isInvalid}
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
                  <Link onClick={this.handleFormChange} name="loggingIn" variant="body2">
                    Have an account? Login
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={this.handleFormChange} name="signingUp" variant="body2">
                    {"No account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
              <Typography variant="body2" color="textSecondary" align="center">
                  {'Copyright © '}
                  <Link color="inherit">
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
}

export default withRouter(ResetPasswordForm);