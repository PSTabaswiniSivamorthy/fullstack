import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import Price from "../Price/Price";
import classes from "./thumbnails.module.css";
export default function Thumbnails({ cakes }) {
  return (
    <ul className={classes.list}>
      {cakes.map((cake) => (
        <li key={cake.id}>
          <Link to={`cake/${cake.id}`}>
            <img
              className={classes.image}
              src={`cakes/${cake.imageUrl}`}
              alt={cake.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{cake.name}</div>
              <span
                className={`${classes.favorite} ${
                  cake.favorite ? "" : classes.not
                }`}
              >
                {" "}
                ❤
              </span>
              <div className={classes.starts}>
                <StarRating stars={cake.stars} />
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {cake.origins.map((origin) => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
                <div className={classes.cook_time}>
                  <span>🕒</span>
                  {cake.cookTime}
                </div>
              </div>
              <div className={classes.price}>
                <Price price={cake.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
