import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LockIcon from '@material-ui/icons/Lock';
import SettingIcon from '@material-ui/icons/SettingsApplications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WarningIcon from '@material-ui/icons/Warning';
import Firebase from '../../../firebase';

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

export const secondaryListItems = (

  

  <div>
     <ListSubheader inset>Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <SettingIcon />
      </ListItemIcon>
      <ListItemText primary="Change password" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Sign out" onClick={ () => Firebase.auth().signOut() }/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WarningIcon color="error" />
      </ListItemIcon>
      <ListItemText primary="Delete account" />
    </ListItem>
  </div>
);