import React from "react";
import {
  Button,
  Avatar,
  Grid,
  Container,
  Link,
  Box,
  Checkbox,
  Paper,
  FormControlLabel,
  TextField,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { style } from "typestyle";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Roboost Devs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Home = () => {
  return (
    <Grid container className={styles.root}>
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <Avatar className={styles.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={styles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

const styles = {
  root: style({
    height: "90vh",
  }),
  image: style({
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }),
  paper: style({
    marginLeft: "28px",
    marginRight: "28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  avatar: style({
    marginTop: "8px",
    backgroundColor: "#a100ff",
  }),
  form: style({
    width: "100%", // Fix IE 11 issue.
    marginTop: "8px",
  }),
  submit: style({
    margin: "10px",
    backgroundColor: "#3d0099",
  }),
};
