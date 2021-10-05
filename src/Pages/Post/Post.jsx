import React, { useEffect, useState, useContext } from "react";
import { PostServices, UserServices } from "../../Service";
import {
  Container,
  Paper,
  Grid,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useParams } from "react-router";
import { Styles } from "./Styles";
import { post1 } from "../../Assets/Images";
import { DialogComponent } from "../../Components";
import { AuthContext } from "../../Hooks/AuthContext";
import { useHistory } from "react-router-dom";

const postServices = new PostServices();
const userServices = new UserServices();

function PostPage() {
  const classes = Styles();
  const { auth } = useContext(AuthContext);
  const { id } = useParams();

  const [postData, setPostData] = useState({});
  const [commentArr, setCommentArr] = useState([]);
  const [user, setUser] = useState({});

  const [dialogOpen, setDialogOpen] = useState(false);

  const getPostById = (id) => {
    postServices.getPostById(id).then((res) => {
      setPostData(res.data);
      console.log(res.data);
    });
  };

  const getUserById = (id) => {
    userServices.getUserById(id).then((res) => {
      setUser(res.data);
      console.log(res);
    });
  };

  const getCommentsByPostId = (postId) => {
    postServices.getCommentsByPostId(postId).then((res) => {
      setCommentArr(res.data);
      console.log(res.data);
    });
  };

  const history = useHistory();
  const handleRedirect = () => {
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    getPostById(id);
  }, [id]);

  useEffect(() => {
    if (Object.keys(postData).length > 0) {
      getCommentsByPostId(postData.id);
      getUserById(postData.userId);
      console.log(postData.userId);
    }
  }, [postData]);

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
        <Grid item xs={12} className={classes.imageContainer}>
          <img src={post1} alt="post-wallpaper" />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={8} align="left">
              <Typography variant="h5">{postData.title}</Typography>
            </Grid>
            <Grid item xs={4} align="end">
              {auth && (
                <IconButton
                  color="default"
                  aria-label="upload picture"
                  component="span"
                  onClick={() => handleRedirect()}
                >
                  <EditIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {postData.body}
        </Grid>
        <Grid item xs={12} sm={6}>
          author: {user.name}
        </Grid>
        <Grid item xs={12} sm={6} align="right">
          {auth && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setDialogOpen(true)}
            >
              delete
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          Comments:
          {commentArr.map((item, ind) => {
            return (
              <Paper key={ind} className={classes.commentItem}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography variant="body2">{item.body}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {item.name}
                  </Grid>
                  <Grid item xs={6} align="right">
                    {item.email}
                  </Grid>
                </Grid>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
      <DialogComponent
        id={id}
        open={dialogOpen}
        handleClose={() => {
          setDialogOpen(false);
        }}
      />
    </Container>
  );
}

export default PostPage;
