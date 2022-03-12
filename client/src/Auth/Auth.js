import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
  const classes = useStyles();
  const [isSignUp, setisSignUp] = useState(false);
  const [Showpassword, setShowpassword] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {};

  const handleShowPassword = () =>
    setShowpassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setisSignUp((prevState) => !prevState);
    handleShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={SubmitHandler}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="First Name"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="last Name"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="email"
              handleChange={handleChange}
              type="email"
            />

            <Input
              name="password"
              label="password"
              handleChange={handleChange}
              type={Showpassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an Account? Sign In"
                  : "Don't have an Account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
