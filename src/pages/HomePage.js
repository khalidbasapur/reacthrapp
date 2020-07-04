import React from "react";
import { Grid, TextField, TextareaAutosize, Paper } from "@material-ui/core";

const HomePage = () => {
  return (
    <>
      <Grid direction="row" container>
        <Grid
          item
          sm={12}
          style={{
            paddingLeft: "24px",
            height: "40px",
            fontFamily: `'Open Sans', sans-serif`,
          }}
        >
          <h2>Goal Settings</h2>
        </Grid>
        <Grid item sm={12}>
          <div
            style={{
              flexDirection: "column",
              padding: "24px",
              height: "100vh",
            }}
          >
            <Paper style={{ padding: "24px" }}>
              <form noValidate autoComplete="off">
                <Grid container direction="row" spacing={3}>
                  <Grid item sm={4} />
                  <Grid item sm={4}>
                    <TextField
                      label="Name"
                      style={{ display: "flex" }}
                    ></TextField>
                  </Grid>
                  <Grid item sm={4} />

                  <Grid item sm={4} />
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
                  <Grid item sm={4} />

                  <Grid item sm={4} />
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
                  <Grid item sm={4} />

                  <Grid item sm={4} />
                  <Grid item sm={4}>
                    <TextareaAutosize
                      style={{ width: "100%" }}
                      rowsMin={15}
                      rowsMax={15}
                      placeholder="Instructions"
                    />
                  </Grid>
                  <Grid item sm={4} />
                </Grid>
              </form>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
