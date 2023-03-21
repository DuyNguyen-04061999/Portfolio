import React from "react";
import { createPortal } from "react-dom";

const Portal = ({
  containerClassName = "",
  contentClassName = "",
  containerStyle = {},
  contentStyle = {},
  overlay,
  onClose,
  children,
}) => {
  const renderElement = (
    <div className={`container ${containerClassName}`} style={containerStyle}>
      {overlay && <div className="overlay" onClick={onClose}></div>}
      <div className={`content ${contentClassName}`} style={contentStyle}>
        {children}
      </div>
    </div>
  );

  return createPortal(renderElement, document.body);
};

export default Portal;
