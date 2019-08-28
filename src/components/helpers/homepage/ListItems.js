import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LockIcon from '@material-ui/icons/Lock';
import SettingIcon from '@material-ui/icons/SettingsApplications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WarningIcon from '@material-ui/icons/Warning';
import DeleteDialog from './DeleteDialog';
import PasswordDialog from './PasswordDialog';

import Firebase from '../../../firebase';
import { Route, Redirect } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListSubheader inset>Saved problems</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Problem 1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
       <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Problem 2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
       <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Problem 3" />
    </ListItem>
  </div>
);

const handleChangePassword = () => {
  // get the new password and update it on the users profile
  let passwordOne = prompt("Please enter your new password");
  let passwordTwo = prompt("Please re-enter your new password");

  if (passwordOne === passwordTwo)
  {
    Firebase.auth().currentUser.updatePassword(passwordOne).then(alert("Success! Your password has been changed."));
  } else {
    alert("Passwords not the same! Please try again.");
  }
}

const handleSignout = () => {

  // sign the user out of Firebase then reload the window on a success
  Firebase.auth().signOut()
    .then(window.location.reload())
    .catch((err) => {
      // handle errors here
      alert(err);
      }
    );
}

const handleDeleteAccount = () => {
  // send user email to change their password
  if (window.confirm("Are you sure you want to delete your account?")) {
    Firebase.auth().currentUser.delete()
      .then(window.location.reload())
      .catch((err) => {
      // handle errors here
    });
  }
}

export const secondaryListItems = (



  <div>
     <ListSubheader inset>Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <SettingIcon />
      </ListItemIcon>
      <PasswordDialog />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Sign out" onClick={handleSignout} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WarningIcon color="error" />
      </ListItemIcon>
      <DeleteDialog />
    </ListItem>
  </div>
);