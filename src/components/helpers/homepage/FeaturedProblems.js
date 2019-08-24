/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Problem Data
function createData(id, type, title, info, solved, score) {
  return { id, type, title, info, solved, score };
}

const rows = [
  createData(0, 'Psychology', 'What Are You Thinking?', 'A racing mind that no one has been able to help...', 'No', 'N/A'),
  createData(1, 'Pediatric', 'Save the Children', 'A child has been exposed to dangerous levels of radiation...', 'No', 'N/A'),
  createData(2, 'Neurology', 'Think? Think.', 'A patients brain has been misfiring...', 'No', 'N/A'),
  createData(3, 'Cardiology', 'Achy Breaky Heart', 'Love hurts...', 'No', 'N/A'),
  createData(4, 'Dermatology', 'Feeling Out of Place', 'A patient has had complaints about...', 'No', 'N/A'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function FeaturedProblems() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Featured Problems</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Solved?</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.info}</TableCell>
              <TableCell>{row.solved}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="problems">
          See more problems
        </Link>
      </div>
    </React.Fragment>
  );
}
