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
  images: {
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
  images,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__image}>
        <picture>
          <source media="(max-width: 375px)" srcSet={images.mobile} />
          <img src={images.desktop} alt={title} />
        </picture>
      </div>
      <div className={styles.productCard__content}>
        <span className={styles.productCard__content__headline}>
          {productType}
        </span>
        <h2 className={styles.productCard__content__title}>{title}</h2>
        <p className={styles.productCard__content__description}>
          {description}
        </p>
        <div className={styles.productCard__content__pricing}>
          <span className={styles.productCard__content__price}>{price}</span>
          {prevPrice && (
            <span className={styles.productCard__content__prevPrice}>
              {prevPrice}
            </span>
          )}
        </div>
        <Button>
          <CartIcon />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
