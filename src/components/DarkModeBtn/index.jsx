import { cn } from "@/utils";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Portal from "../Portal";
import { useTheme } from "../ThemeMode";

const BtnStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  svg {
    transition: 0.5s;
    &.change {
      animation: change 1s linear alternate;
    }
  }
  ${({ theme }) =>
    theme === "light"
      ? css`
          background: linear-gradient(145deg, #23282c, #1e2125);
          box-shadow: 1px 7px 20px 0px #1a1d20, 0px 1px 20px #282d32,
            inset 5px 5px 4px #1e2226, inset -5px -5px 4px #24282c;
        `
      : css`
          background: #fff;
          box-shadow: 7px 7px 15px -10px #bbcfda, -4px -4px 13px #ffffff,
            inset 7px 7px 3px rgb(209 217 230 / 35%),
            inset -11px -11px 3px rgb(255 255 255 / 30%);
        `}
`;

const DarkModeBtn = () => {
  const { theme, onToggleTheme } = useTheme();
  const [change, setChange] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 300);
  }, [theme]);
  return (
    <Portal>
      <BtnStyled
        className="fixed bottom-[20px] right-[20px] z-50 h-[70px] w-[70px] rounded-full"
        onClick={() => {
          onToggleTheme();
          setChange(true);
        }}
        theme={theme}
      >
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dadada"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("feather feather-moon", { change })}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFD700"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("feather feather-sun", { change })}
          >
            <circle cx={12} cy={12} r={5} />
            <line x1={12} y1={1} x2={12} y2={3} />
            <line x1={12} y1={21} x2={12} y2={23} />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1={1} y1={12} x2={3} y2={12} />
            <line x1={21} y1={12} x2={23} y2={12} />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </BtnStyled>
    </Portal>
  );
};

export default DarkModeBtn;
