import { Grid, InputAdornment, TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";

const Input = ({
  half,
  name,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        required
        label={label}
        onChange={handleChange}
        fullWidth
        autoFocus={autoFocus}
        type={type}
        variant="outlined"
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      ></TextField>
    </Grid>
  );
};

export default Input;
