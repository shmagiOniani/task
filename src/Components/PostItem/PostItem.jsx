import React from "react";
import { useHistory } from "react-router-dom";
import { Paper, Grid, Typography } from "@material-ui/core";
import { Styles } from "./Styles";

function PostItem(props) {
  const classes = Styles();

  const history = useHistory();
  const handleRedirect = () => {
    history.push(`/post/${props.postId}`);
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      onClick={() => handleRedirect()}
      className={classes.root}
    >
      <Paper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} className={classes.image}>
            <img src={props.image} alt="post" />
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              className={classes.description}
            >
              <Grid item xs={12} className={classes.header}>
                <Typography>{props.title}</Typography>
              </Grid>
              <Grid item xs={6}>
                {props.userName.name}
              </Grid>
              <Grid item xs={6} align="right">
                {props.userName.email}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default PostItem;
