import React from "react";
import { Box, Button } from "@material-ui/core";

const ButtonContainer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      className="button-container"
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
