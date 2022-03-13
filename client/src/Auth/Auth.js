import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Icon from "./Icon";

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

  const GoogleSuccess = async (res) => {
    console.log(res);
  };

  const GoogleFailure = () => {
    console.log("Google Sign in failed.Please Try Again Later");
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

          <GoogleLogin
            clientId="377386531731-nfueq28h4q7r4sdmbie5ej72928e45bj.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                variant="contained"
                color="primary"
                onClick={renderProps.onClick}
                className={classes.googleButton}
                fullWidth
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                Sign in With Google
              </Button>
            )}
            onSuccess={GoogleSuccess}
            onFailure={GoogleFailure}
            cookiePolicy="single_host_origin"
          />

          <Grid container justifyContent="flex-end">
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
