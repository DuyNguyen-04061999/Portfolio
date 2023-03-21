import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
const Button = ({ children, className = "", loading = false }) => {
  return (
    <button
      className={`button rounded bg-primary-btn py-[12px] px-[24px] text-white ${className}  flex h-max w-max cursor-pointer items-center outline-none ${
        loading && "cursor-wait"
      }`}
      style={{ border: "1px solid #65d3b8" }}
      disabled={loading}
    >
      {loading && <LoadingOutlined className="mr-[10px]" />}
      {children}
    </button>
  );
};

export default Button;
