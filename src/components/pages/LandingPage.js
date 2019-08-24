import React, { Component,  } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import 'typeface-roboto';

import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';
import ResetPasswordForm from '../forms/ResetPasswordForm';

import "../../styling/pages/LandingPage.css"

/**
 * Styling for the landing page.
 */
const styles = {
    root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '65vh',
        padding: '0px 25px 25px 25px',
      },
      title: {
        color: '#4c73c9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30vh',
        padding: '25px 25px 0px 25px',
      },
    };

/**
 * Landing page component.
 */
class LandingPage extends Component {
    constructor(props) {
        super(props);
        
        // conditionally render forms via the state
        this.state = {
            loggingIn: true,
            signingUp: false,
            forgotPassword: false,
        };
    }

    /**
     * Change the form that is displayed on the landing page.
     */
    displayNewForm = (e) => {
      console.log(e);
      switch (e) {
        case "loggingIn":
          this.setState({
            loggingIn: true,
            signingUp: false,
            forgotPassword: false,
          })
          break;
        case "signingUp":
          this.setState({
            loggingIn: false,
            signingUp: true,
            forgotPassword: false,
          })
          break;
        case "forgotPassword":
          this.setState({
            loggingIn: false,
            signingUp: false,
            forgotPassword: true,
          })
          break;
        default:
          break;
      }
    }


  render() {
      const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div >
            <Typography className={classes.title} component="h2" variant="h2" gutterBottom>
              All-Inclusive Health and Present Illness Report
            </Typography>
          </div>
          <div className={classes.paper}>
            { this.state.loggingIn ? <LoginForm onDataChanged={this.displayNewForm} /> : null }
            { this.state.signingUp ? <SignUpForm onDataChanged={this.displayNewForm} /> : null }
            { this.state.forgotPassword ? <ResetPasswordForm onDataChanged={this.displayNewForm} /> : null }
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LandingPage);
