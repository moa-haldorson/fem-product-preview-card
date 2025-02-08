import React from "react";
import icon from "../assets/icon-cart.svg";
import Button from "./Button";

const Card: React.FC = () => {
  return (
    <div>
      Card
      <Button text="Add to cart" icon={icon} />
    </div>
  );
};

export default Card;
