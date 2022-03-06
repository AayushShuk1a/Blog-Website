import React from "react";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
} from "@material-ui/core";

import { catergories } from "../../Constants/data";

const useStyles = makeStyles({
  button: {
    margin: 20,
    width: "86%",
    backgroundColor: "#6495ED",
    color: "#fff",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
});

const Catergories = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" className={classes.button}>
        Create Blog
      </Button>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catergories.map((category) => (
            <TableRow>
              <TableCell>{category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Catergories;
