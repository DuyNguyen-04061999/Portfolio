import React from "react";

const Field = ({ type = "text", renderInput, error, className, ...props }) => {
  return (
    <label className={`${className} relative`}>
      {renderInput ? renderInput(props) : <input type={type} {...props} />}
      {error && (
        <span className="absolute top-full left-0 italic !text-red-500">
          {error}
        </span>
      )}
    </label>
  );
};

export default Field;
