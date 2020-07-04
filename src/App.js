import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Drawer, makeStyles, withStyles } from "@material-ui/core";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import FieldContainer from "./pages/FieldContainer";
import ButtonContainer from "./pages/ButtonContainer";

const drawerWidth = "25%";
//const backGroundColor = "#FDFFFC";
const backGroundColor = "#EEF0F2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: backGroundColor,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: "red",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: backGroundColor,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const GlobalCss = withStyles({
  "@global": {
    ".MuiExpansionPanel-root.Mui-expanded": {
      margin: 0,
    },
    ".MuiFormLabel-root, .MuiInputBase-root, .MuiTypography-root, .MuiChip-label": {
      fontFamily: `'Open Sans', sans-serif`,
    },
    textArea: {
      fontFamily: `'Open Sans', sans-serif`,
    },
  },
})(() => null);

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Router>
        <div className={classes.root}>
          <GlobalCss />
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
