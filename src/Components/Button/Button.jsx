import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div
      onClick={() => props.onClick()}
      id="button"
      className={
        props.variant === "save"
          ? "save"
          : props.variant === "delete"
          ? "delete"
          : "primary"
      }
    >
      {props.content}
    </div>
  );
}

export default Button;
