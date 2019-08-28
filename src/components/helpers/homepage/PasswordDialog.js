import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import Firebase from '../../../firebase';

class PasswordDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open : false,
            passwordOne : '',
            passwordTwo : '',
        }
    }

    toggleForm = () => {
        this.setState({open : !this.state.open})
    }

    handleSubmit = () => {
        Firebase.auth().currentUser.updatePassword(this.state.passwordOne)
        .then(this.setState({open : false}))
        .catch((err) => {
            // handle errors here
        })

    }

    handlePassword = (e) => {
        this.setState({ [e.target.id] : e.target.value });
    }

    render () {
        const isInvalid = this.state.passwordOne === '' || 
                            this.state.passwordTwo === '' ||
                            this.state.passwordOne !== this.state.passwordTwo;
        return (
            <div>
              <ListItemText primary="Change password" onClick={this.toggleForm} />
              <Dialog open={this.state.open} onClose={this.toggleForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change password</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To update your password, please enter your new password twice.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="passwordOne"
                    label="New password"
                    type="password"
                    fullWidth
                    onChange={this.handlePassword}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="passwordTwo"
                    label="New password"
                    type="password"
                    fullWidth
                    onChange={this.handlePassword}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.toggleForm} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleSubmit} disabled={isInvalid} color="primary">
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }
}

export default PasswordDialog;