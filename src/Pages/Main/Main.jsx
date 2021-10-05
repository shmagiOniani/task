import React, { useEffect, useState, useContext } from "react";
import { PostItem } from "../../Components";
import { AuthContext } from "../../Hooks/AuthContext";
import { Container, Grid, Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { PostServices, UserServices } from "../../Service";
import { post1, post2, post3, post4, post5 } from "../../Assets/Images";
import { Styles } from "./Styles";
import AddForm from "../../Components/AddForm/AddForm";

const imgArr = [post1, post2, post3, post4, post5];

const postServices = new PostServices();
const userServices = new UserServices();

function Main() {
  const classes = Styles();
  const { auth } = useContext(AuthContext);

  const [postArr, setPostArr] = useState([]);
  const [userArr, setUserArr] = useState([]);
  const [counter, setCounter] = useState(10);

  const [addFormOpen, setAddFormOpen] = useState(false);

  const getAllPosts = (amount) => {
    postServices.getAllPosts().then((res) => {
      setPostArr(res.data.slice(0, amount));
    });
  };

  const getAllUsers = () => {
    userServices.getAllUsers().then((res) => {
      setUserArr(res.data);
    });
  };

  const getUserName = (userId) => {
    if (userArr.length > 0) {
      const selectedUser = userArr.find((item) => item.id === userId);

      return selectedUser;
    }
  };

  useEffect(() => {
    getAllPosts(counter);
    getAllUsers();
  }, [counter]);

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
        {auth && (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className={classes.addButton}
            onClick={() => setAddFormOpen(true)}
          >
            <AddIcon />
          </IconButton>
        )}
        {userArr.length > 0 &&
          postArr.map((item) => {
            return (
              <PostItem
                key={item.id}
                image={imgArr[Math.floor(Math.random() * 5)]}
                title={item.title}
                userName={getUserName(item.userId)}
                postId={item.id}
              />
            );
          })}
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCounter(counter + 10);
              console.log(counter);
            }}
          >
            Load More
          </Button>
        </Grid>
      </Grid>
      <AddForm open={addFormOpen} handleClose={() => setAddFormOpen(false)} />
    </Container>
  );
}

export default Main;
