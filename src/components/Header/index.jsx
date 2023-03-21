import { cn } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../Nav";
import { useTheme } from "../ThemeMode";
const HeaderNav = styled.ul`
  ${({ active, show }) =>
    active && !show
      ? css`
          display: flex;
        `
      : !active && !show
      ? css`
          display: none;
        `
      : ""}

  @media (min-width: 992px) {
    display: flex;
  }

  &.dark {
    li {
      a {
        color: #fff;
      }
    }
  }
`;

const Header = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const delay = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });

  const onToggle = async () => {
    if (!active) {
      setActive(true);
      setDisabled(true);
      await delay(2000);
      setShow(true);
      setDisabled(false);
    } else {
      setActive(false);
      setDisabled(true);
      await delay(1300);
      setShow(false);
      setDisabled(false);
    }
  };
  useEffect(() => {
    const closeMenu = async function () {
      if (active && show) {
        setActive(false);
        await delay(1300);
        setShow(false);
      }
    };

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [active, show]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) {
        setActive(false);
        setShow(false);
      }
    };

    window.addEventListener("resize", onResize);
  }, []);
  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <a href="#" className="header__logo">
          <span className="header__logo-capital">D</span>
          <span className={`header__logo-name ${theme}`}>Duy Nguyen</span>
        </a>

        <HeaderNav
          className={cn(`header__nav ${theme}`, { active }, { show })}
          active={active}
          show={show}
        >
          <Nav.Group>
            <Nav id="#">Home</Nav>
            <Nav id="#about">About</Nav>
            <Nav id="#techstack">Tech Stack</Nav>
            <Nav id="#projects">Projects</Nav>
            <Nav id="#contact">Contact</Nav>
          </Nav.Group>
        </HeaderNav>

        <button
          disabled={disabled}
          className={cn("header__close border-none outline-none", {
            active: active,
          })}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
