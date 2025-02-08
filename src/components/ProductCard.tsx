/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import CartIcon from "../assets/icon-cart.svg?react";
import Button from "./Button";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  productType: string;
  title: string;
  description: string;
  price: number;
  prevPrice?: number;
  image: {
    desktop: string;
    mobile: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  productType,
  title,
  description,
  price,
  prevPrice,
  image,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles["productCard__image"]}>
        <picture>
          <source media="(max-width: 576px)" srcSet={image.mobile} />
          <img src={image.desktop} alt={title} />
        </picture>
      </div>
      <div className={styles["productCard__content"]}>
        <span className={styles["productCard__headline"]}>{productType}</span>
        <h2 className={styles["productCard__title"]}>{title}</h2>
        <p className={styles["productCard__description"]}>{description}</p>
        <div className={styles["productCard__priceContainer"]}>
          <span className={styles["productCard__price"]}>${price}</span>
          {prevPrice && (
            <span className={styles["productCard__price--prev"]}>
              ${prevPrice}
            </span>
          )}
        </div>
        <Button>
          <CartIcon />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
