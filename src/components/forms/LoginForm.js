import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../../styling/forms/LoginForm.css';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Firebase from '../../firebase';

class LoginForm extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
   * send login info up to parent
   */
  toggleLogin = () => {
    this.props.onDataChanged()
  }
  
  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    // handle auth with firebase
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() =>{
        this.props.history.push('/home');
      })
      .catch((err) => {
        console.log(err);
        alert(err);
    });
  }

    render () {
      
      const isInvalid = this.state.email === '' || this.state.password === '';
      //const { match, location, history } = this.props;

        return(
            <div>
              <Typography component="h1" variant="h5">
                Sign in
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  disabled={isInvalid}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={"submit"}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={this.handleFormChange} name="forgotPassword" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={this.handleFormChange} name="signingUp" variant="body2">
                      {"Don't have an account? Sign Up"}
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

export default withRouter(LoginForm);