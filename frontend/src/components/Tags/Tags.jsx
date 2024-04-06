import React from "react";
import classes from "./tags.module.css";
import { Link } from "react-router-dom";
export default function tags({ tags, forCakePage }) {
  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forCakePage ? "start" : "center",
      }}
    >
      {tags.map((tag) => (
        <Link key={tag.name} to={`/tag/${tag.name}`}>
          {tag.name}
          {!forCakePage && `(${tag.count})`}
        </Link>
      ))}
    </div>
  );
}
