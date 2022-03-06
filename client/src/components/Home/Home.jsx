import { Grid } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Catergories from "./Categories";
import Posts from "./Posts";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Catergories></Catergories>
        </Grid>
        <Grid item lg={10} sm={10} xs={12}>
          <Posts></Posts>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
