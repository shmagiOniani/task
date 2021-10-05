import React, { useEffect, useState } from "react";
import { PostServices } from "../../Service";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Styles } from "./Styles";

const postServices = new PostServices();

function Edit() {
  const classes = Styles();

  const { id } = useParams();

  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const getPostById = (id) => {
    postServices.getPostById(id).then((res) => {
      setData(res.data);
      setData({
        title: res.data.title,
        body: res.data.body,
      });
      console.log(res.data);
    });
  };

  const history = useHistory();
  const handleRedirect = () => {
    history.push(`/post/${id}`);
  };

  const updatePost = (data) => {
    postServices.updatePost(data).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getPostById(id);
  }, [id]);

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        className={classes.root}
      >
        <Grid item xs={12} align="left">
          <TextField
            fullWidth
            variant="outlined"
            id="demo-controlled-open-select"
            label="Edit Tile"
            value={data.title}
            onChange={(e) => {
              setData({
                ...data,
                title: e.target.value,
              });
            }}
          />
          <Typography variant="h5">{data.title}</Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            id="demo-controlled-open-select"
            label="Edit Body"
            value={data.body}
            multiline
            maxRows={4}
            onChange={(e) => {
              setData({
                ...data,
                body: e.target.value,
              });
            }}
          />
          {data.body}
        </Grid>
        <Grid
          item
          xs={12}
          align="right "
          onClick={() => {
            console.log(data);
            updatePost(data);
            handleRedirect();
          }}
        >
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Edit;
