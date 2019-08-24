/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Statistics() {
  const classes = useStyles();
  let today = new Date().toLocaleDateString();
  return (
    <React.Fragment>
      <Title>Problems Solved</Title>
      <Typography component="p" variant="h4">
        0 / 100
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        { today }
      </Typography>
      <div>
        <Link color="primary" href="problems">
          Go to problems
        </Link>
      </div>
    </React.Fragment>
  );
}
