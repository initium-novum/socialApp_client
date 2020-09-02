import React from "react";
import { Home } from "./views/Home";
import { style } from "typestyle";
import "./App.css";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className={styles.root}>
      <Home></Home>
    </div>
  );
}

const styles = {
  root: style({
    margin: "40px",
  }),
};

export default App;
