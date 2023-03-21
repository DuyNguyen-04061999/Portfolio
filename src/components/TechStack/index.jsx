import React from "react";

import css from "@/assets/img/css.svg";
import git from "@/assets/img/git.svg";
import github from "@/assets/img/github.svg";
import github_dark from "@/assets/img/github-dark.svg";
import html from "@/assets/img/html.svg";
import js from "@/assets/img/js.svg";
import grunt from "@/assets/img/grunt.svg";
import react from "@/assets/img/react.svg";
import sass from "@/assets/img/sass.svg";
import tailwind from "@/assets/img/tailwindcss.svg";
import vite from "@/assets/img/vite.svg";
import vscode from "@/assets/img/vscode.svg";
import redux from "@/assets/img/redux.svg";
import { useTheme } from "../ThemeMode";
const TechStack = () => {
  const { theme } = useTheme();

  return (
    <section className={`techstack ${theme}`} id="techstack">
      <div className="container">
        <div className="techstack__heading">
          <h2 className="techstack__heading-title" id={theme}>
            My Tech Stack
          </h2>
          <span className="techstack__heading-script">
            Technologies I’ve been working with recently
          </span>
        </div>

        <div className="techstack__content" id={theme}>
          <div className="techstack__content-item">
            <img src={html} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={css} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={js} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={grunt} alt="grunt" />
          </div>
          <div className="techstack__content-item">
            <img src={vite} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={react} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={tailwind} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={sass} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={vscode} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={git} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={redux} alt="css" />
          </div>
          <div className="techstack__content-item">
            <img src={theme === "light" ? github : github_dark} alt="css" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
