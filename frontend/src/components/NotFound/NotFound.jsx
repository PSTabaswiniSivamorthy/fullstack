import React from "react";
import classes from "./notfound.module.css";
import { Link } from "react-router-dom";
export default function NotFound({ message, linkRoute, linkText }) {
  return (
    <div className={classes.container}>
      {message}
      <Link to={linkRoute}>{linkText}</Link>
    </div>
  );
}
NotFound.defaultProps = {
  mesaage: "The item you searched for is not present",
  linkRoute: "/",
  linkText: "Go To Home page",
};
