import React from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  Chip,
} from "@material-ui/core";

const FieldContainer = () => {
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
              <TextField label="Label" style={{ display: "flex" }}></TextField>
            </Grid>
            <Grid item sm={4}>
              <TextField
                label="Field Id"
                style={{ display: "flex" }}
              ></TextField>
            </Grid>
            <Grid item sm={4}>
              <FormControlLabel
                control={<Checkbox name="required" color="primary" />}
                label="Required Field"
                style={{ display: "flex" }}
              />
            </Grid>
            <Grid item sm={4}>
              <FormControl style={{ display: "flex" }}>
                <InputLabel htmlFor="field-type">Field Type</InputLabel>
                <Select native inputProps={{ name: "field", id: "field-type" }}>
                  <option aria-label="None" value="" />
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4}></Grid>
            <Grid item sm={4}></Grid>

            <Grid item sm={1}>
              <Chip label="Employee"></Chip>
            </Grid>
            <Grid item sm={11}>
              <FormControlLabel
                control={<Checkbox name="Read" color="primary" />}
                label="Read"
              />
              <FormControlLabel
                control={<Checkbox name="Write" color="primary" />}
                label="Write"
              />
              <FormControlLabel
                control={<Checkbox name="Hide" color="primary" />}
                label="Hide"
              />
            </Grid>

            <Grid item sm={1}>
              <Chip label="Manager"></Chip>
            </Grid>
            <Grid item sm={11}>
              <FormControlLabel
                control={<Checkbox name="Read" color="primary" />}
                label="Read"
              />
              <FormControlLabel
                control={<Checkbox name="Write" color="primary" />}
                label="Write"
              />
              <FormControlLabel
                control={<Checkbox name="Hide" color="primary" />}
                label="Hide"
              />
            </Grid>

            <Grid item sm={1}>
              <Chip label="Admin"></Chip>
            </Grid>
            <Grid item sm={11}>
              <FormControlLabel
                control={<Checkbox name="Read" color="primary" />}
                label="Read"
              />
              <FormControlLabel
                control={<Checkbox name="Write" color="primary" />}
                label="Write"
              />
              <FormControlLabel
                control={<Checkbox name="Hide" color="primary" />}
                label="Hide"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default FieldContainer;
