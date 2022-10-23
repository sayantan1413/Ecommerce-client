import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import "../Icons/Icon.css";

const Icon = () => {
  return (
    <div className="icons">
      <a className="icon">
        <FaFacebookF className="i" />
      </a>
      <a className="icon">
        <FaLinkedinIn className="i" />
      </a>
      <a className="icon">
        <FaTwitter className="i" />
      </a>
    </div>
  );
};

export default Icon;
