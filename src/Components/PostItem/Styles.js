import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    height: "220px",
    [theme.breakpoints.up("md")]: {
      height: "320px",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    paddingTop: "0px!important",
    overflow: "hidden",
    width: "100%",
    height: "100px",
    [theme.breakpoints.up("md")]: {
      height: "220px",
    },
    "& > img": {
      width: "100%",
      height: "auto",
      verticalAlign: "middle",
    },
  },
  description: {
    padding: "0 20px",
  },
}));
