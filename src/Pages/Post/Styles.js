import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles((theme) => ({
  root: {},
  imageContainer: {
    width: "100vw",
    height: "inherit",
    maxHeight: "300px",
    overflow: "hidden",
    "&>img": {
      width: "100%",
      height: "auto",
    },
  },
  commentItem: {
    margin: "20px 0",
    padding: "15px",
  },
}));
