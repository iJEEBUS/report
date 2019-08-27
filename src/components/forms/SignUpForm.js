import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../../styling/forms/SignUpForm.css';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SignUpForm extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    }
  }
  /**
  * Send data back to the parent to change forms.
  */
  handleFormChange = (e) => {
    this.props.onDataChanged(e.target.name);
  }

  /**
   * Updates values for inputted data
   */
  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  /**
   * Attempt to create a new account with firebase.
   * Automatically login if it is a success.
   */
  handleSubmit = () => {
    this.props.history.push('/home');
  }

  

    render () {

      const isInvalid = this.state.email === '' ||
                        this.state.firstName === '' ||
                        this.state.lastName === '' ||
                        this.state.passwordOne === '' ||
                        this.state.passwordTwo === '' ||
                        this.state.passwordOne !== this.state.passwordTwo;
        return(
            <div>
              <Typography component="h1" variant="h5">
                Sign up
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
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firsName"
                  label="First Name"
                  name="firstName"
                  autoFocus
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoFocus
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="passwordOne"
                  label="Password"
                  type="password"
                  id="passwordOne"
                  autoComplete="current-password"
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="passwordTwo"
                  label="Password"
                  type="password"
                  id="passwordTwo"
                  autoComplete="current-password"
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
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={this.handleFormChange} name="forgotPassword" variant="body2">
                      Forgot Password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={this.handleFormChange} name="loggingIn" variant="body2">
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

export default withRouter(SignUpForm);