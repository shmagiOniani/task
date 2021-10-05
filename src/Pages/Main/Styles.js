import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "20px 0",
  },
  addButton: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    backgroundColor: "#3f51b5",
    color: "white",
    "&:hover": {
      backgroundColor: "#606cb2",
    },
  },
  postItem: {
    border: "1px solid gray ",
    height: "220px",
    [theme.breakpoints.up("md")]: {
      height: "320px",
    },
  },
}));
