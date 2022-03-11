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
import { Link } from "react-router-dom";

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
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Catergories = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/create" className={classes.link}>
        <Button variant="contained" className={classes.button}>
          Create Blog
        </Button>
      </Link>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={"/?category=All"} className={classes.link}>
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catergories.map((category) => (
            <TableRow key={category}>
              <TableCell>
                <Link to={`/?category=${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Catergories;
