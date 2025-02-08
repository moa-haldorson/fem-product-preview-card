import React from "react";

const Button: React.FC<{ text: string; icon: string }> = ({ text, icon }) => {
  return (
    <button>
      {text}
      <img src={icon} alt="" />
    </button>
  );
};

export default Button;
