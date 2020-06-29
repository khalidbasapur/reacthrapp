import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Drawer, makeStyles, CssBaseline } from "@material-ui/core";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import FieldContainer from "./pages/FieldContainer";
import ButtonContainer from "./pages/ButtonContainer";

const drawerWidth = "25%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
          >
            <ButtonContainer />
            <NavBar />
          </Drawer>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/goal-setting" component={FieldContainer} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
