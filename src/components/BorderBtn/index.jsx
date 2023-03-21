import React from "react";

const BorderBtn = ({ children, attr, href = "#" }) => {
  return (
    <a
      href={href}
      {...attr}
      className="flex h-max w-max gap-[14px] rounded py-[12px] px-[24px] text-primary-btn"
      style={{ border: "1px solid #65d3b8" }}
    >
      {children}
    </a>
  );
};

export default BorderBtn;
