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

class DeleteDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
      fb_email : Firebase.auth().currentUser.email,
      email_input : '',
    }
  }

  handleClickOpen = () => {
    this.setState({open : true});
  }

  handleClose = () => {
    this.setState({open : false});
  }

  deleteAccount = () => {
    Firebase.auth().currentUser.delete()
      .then(this.setState({open : false}))
      .catch((err) => {
      // handle errors here
    });
    window.location.reload();
  }
  
  handleEmail = (e) => {
    this.setState({[e.target.id] : e.target.value});
  }

  render() {

    const isInvalid = this.state.fb_email !== this.state.email_input
    console.log(this.state.fb_email, this.state.inputted_email)
    console.log(this.state.fb_email === this.state.inputted_email);
    return (
      <div>
        <ListItemText primary="Delete account" onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="delete-dialog-title"
          aria-describedby="delete-dialog-description"
        >
          <DialogTitle id="delete-dialog-title">{"Delete account?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="delete-dialog-description">
              To delete your account, please type in your current password.
            </DialogContentText>
            <TextField
                    autoFocus
                    margin="dense"
                    id="email_input"
                    label="Current email"
                    type="email"
                    fullWidth
                    onChange={this.handleEmail}
                  />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteAccount} disabled={isInvalid} color="secondary" autoFocus>
              Delete account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

}

export default DeleteDialog;  
