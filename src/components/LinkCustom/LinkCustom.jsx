import React from "react";
import { Link } from "react-router-dom";

const LinkCustom = ({ content, to, className }) => {
  return (
    <Link to={to} className={`rounded ${className}`}>
      {content}
    </Link>
  );
};

export default LinkCustom;
