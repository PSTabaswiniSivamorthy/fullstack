import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById } from "../../services/cakeService";
import classes from "./cakepage.module.css";
import StarRating from "../../components/StarRating/StarRating";
import Tags from "../../components/Tags/Tags";
import Price from "../../components/Price/Price";
import { useCart } from "../../Hooks/useCart";
import NotFound from "../../components/NotFound/NotFound";
export default function CakePage() {
  const [cake, setCake] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleAddtoCart = () => {
    addToCart(cake);
    navigate("/cart");
  };
  useEffect(() => {
    getById(id).then(setCake);
  }, [id]);

  return (
    <>
      {!cake ? (
        <NotFound message="Food Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/cakes/${cake.imageUrl}`}
            alt={cake.name}
          />
          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{cake.name}</span>
              <span
                className={`${classes.favorite} ${
                  cake.favorite ? "" : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={cake.stars} size={25} />
            </div>

            <div className={classes.origins}>
              {cake.origins?.map((origin) => (
                <span key={origin}>{origin}</span>
              ))}
            </div>
            <div className={classes.tags}>
              {cake.tags && (
                <Tags
                  tags={cake.tags.map((tag) => ({ name: tag }))}
                  forCakePage={true}
                />
              )}
            </div>

            <div className={classes.cook_time}>
              <span>
                Time to cook about <strong>{cake.cookTime}</strong> minutes
              </span>
            </div>

            <div className={classes.price}>
              <Price price={cake.price} />
            </div>

            <button onClick={handleAddtoCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
