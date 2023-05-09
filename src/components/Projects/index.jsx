import course from "@/assets/img/course.jpg";
import mp3 from "@/assets/img/mp3.jpg";
import shopping from "@/assets/img/shopping.jpg";
import skinBeauty from "@/assets/img/skin_beauty.jpg";
import sorento from "@/assets/img/sorento.jpg";
import wooder from "@/assets/img/wooder.jpg";
import React from "react";
import Card from "../Card";
import { useTheme } from "../ThemeMode";

import css from "@/assets/img/css.svg";
import grunt from "@/assets/img/grunt.svg";
import html from "@/assets/img/html.svg";
import js from "@/assets/img/js.svg";
import react from "@/assets/img/react.svg";
import redux from "@/assets/img/redux.svg";
import sass from "@/assets/img/sass.svg";
import tailwind from "@/assets/img/tailwindcss.svg";

const data = [
  {
    id: 1,
    img: mp3,
    related: [html, css, js],
    title: "Music App",
    github: "https://github.com/DuyNguyen-04061999/mp3advancedremake",
    web: "https://mp3advancedremake.vercel.app/",
  },
  {
    id: 2,
    img: skinBeauty,
    title: "Skin Beauty",
    related: [html, css, tailwind, js],
    github: "https://github.com/DuyNguyen-04061999/Skinbeauty",
    web: "https://duynguyen-04061999.github.io/Skinbeauty/public/",
  },
  {
    id: 3,
    img: wooder,
    title: "Wooder",
    related: [html, css, js, grunt],
    github: "https://github.com/DuyNguyen-04061999/wooder",
    web: "https://duynguyen-04061999.github.io/wooder/",
  },
  {
    id: 4,
    img: sorento,
    title: "Sorento",
    related: [html, css, js, grunt],
    github: "https://github.com/DuyNguyen-04061999/sorento",
    web: "https://duynguyen-04061999.github.io/sorento/",
  },
  {
    id: 5,
    img: course,
    title: "Course Register",
    related: [html, css, js, tailwind, react],
    github: "https://github.com/DuyNguyen-04061999/react-course",
    web: "https://react-course-spacedev-4699.vercel.app/",
  },
  {
    id: 6,
    img: shopping,
    title: "E-commerce",
    related: [html, sass, react, js, redux],
    github: "https://github.com/DuyNguyen-04061999/react-shopper",
    web: "https://react-shopper-fawn.vercel.app/",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__heading">
          <h2 className="projects__heading-title" id={theme}>
            Projects
          </h2>
          <span className="projects__heading-script">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </span>
        </div>

        <div className="projects__list">
          {data.map((e) => (
            <Card key={e.id} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
