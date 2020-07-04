import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    "& button": {
      background: "#0071E3",
      borderRadius: "18px",
      marginRight: "16px",
      textTransform: "none",
      fontFamily: `'Open Sans', sans-serif`,
    },
  },
}));

const ButtonContainer = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      className={classes.buttonContainer}
      m={2}
    >
      <Box>
        <Button size="small" variant="contained" color="primary">
          Save
        </Button>
      </Box>
      <Box>
        <Button size="small" variant="contained" color="primary">
          Save As
        </Button>
      </Box>
      <Box>
        <Button size="small" variant="contained" color="primary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonContainer;
