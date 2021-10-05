import React from "react";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@material-ui/core";
import { InputForm } from "..";
import { Styles } from "./Styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddForm(props) {
  const classes = Styles();

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent className={classes.dialogContent}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <InputForm handleClose={() => props.handleClose()} />
        </Grid>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
