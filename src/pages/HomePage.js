import React from "react";
import { Grid, TextField, TextareaAutosize } from "@material-ui/core";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "stretch",
          flexDirection: "column",
          padding: "24px",
        }}
      >
        <form noValidate autoComplete="off">
          <Grid container direction="row" spacing={3}>
            <Grid item sm={4}>
              <TextField label="Name" style={{ display: "flex" }}></TextField>
            </Grid>
            <Grid item sm={4}>
              <TextField
                label="Start Date"
                style={{ display: "flex" }}
                id="start-date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
            </Grid>
            <Grid item sm={4}>
              <TextField
                label="End Date"
                style={{ display: "flex" }}
                id="end-date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
            </Grid>
            <Grid item sm={12}>
              <TextareaAutosize
                style={{ width: "100%" }}
                rowsMin={4}
                rowsMax={4}
                placeholder="Instructions"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default HomePage;
