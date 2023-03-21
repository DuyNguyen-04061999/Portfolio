import React from "react";
import avatar from "@/assets/img/avatar.jpg";
import Button from "../Button";
import BorderBtn from "../BorderBtn";
import bg from "@/assets/img/bg.png";
import CV from "@/assets/file/CV.pdf";
import { useTheme } from "../ThemeMode";
const About = () => {
  const { theme } = useTheme();

  return (
    <section
      className="about"
      style={{ backgroundImage: `url(${bg})` }}
      id="about"
    >
      <div className="container">
        <div className="top">
          <div className={`about__desc ${theme}`}>
            <h1 className="about__desc-title">
              Hello, I’m <br /> Nguyen Phuong Duy
            </h1>
            <p className="about__desc-script">
              First of all, I want to thank you for spending time for reading my
              portfolio. Up to now, I have learnt Web Frontend development for
              more than one year, now I would like to apply for a position of
              Fresher Frontend Developer. I hope that my knowledge and diligence
              will contribute to the strong growth of your business. Have a good
              day!
            </p>
            <Button>Say Hello!</Button>
          </div>
          <div
            className="about__avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        </div>

        <div className={`about__details ${theme}`}>
          <div className="about__details-avatar">
            <img src={avatar} alt="#" />
          </div>

          <div className="about__details-desc">
            <h3 className="heading">Fresher Frontend Developer</h3>

            <p className="script mt-[16px]">
              Please download my CV to get more details. Thank you!
            </p>

            <div className="about__details-control">
              <BorderBtn href={CV} attr={{ download: true }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12C18.7348 12 18.4804 12.1054 18.2929 12.2929C18.1054 12.4804 18 12.7348 18 13V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V13C2 12.7348 1.89464 12.4804 1.70711 12.2929C1.51957 12.1054 1.26522 12 1 12C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12ZM9.29 13.71C9.3851 13.801 9.49725 13.8724 9.62 13.92C9.7397 13.9729 9.86913 14.0002 10 14.0002C10.1309 14.0002 10.2603 13.9729 10.38 13.92C10.5028 13.8724 10.6149 13.801 10.71 13.71L14.71 9.71C14.8983 9.5217 15.0041 9.2663 15.0041 9C15.0041 8.7337 14.8983 8.4783 14.71 8.29C14.5217 8.1017 14.2663 7.99591 14 7.99591C13.7337 7.99591 13.4783 8.1017 13.29 8.29L11 10.59V1C11 0.734784 10.8946 0.48043 10.7071 0.292893C10.5196 0.105357 10.2652 0 10 0C9.73478 0 9.48043 0.105357 9.29289 0.292893C9.10536 0.48043 9 0.734784 9 1V10.59L6.71 8.29C6.61676 8.19676 6.50607 8.1228 6.38425 8.07234C6.26243 8.02188 6.13186 7.99591 6 7.99591C5.86814 7.99591 5.73757 8.02188 5.61575 8.07234C5.49393 8.1228 5.38324 8.19676 5.29 8.29C5.19676 8.38324 5.1228 8.49393 5.07234 8.61575C5.02188 8.73757 4.99591 8.86814 4.99591 9C4.99591 9.13186 5.02188 9.26243 5.07234 9.38425C5.1228 9.50607 5.19676 9.61676 5.29 9.71L9.29 13.71Z"
                    fill="#65d3b8"
                  />
                </svg>
                Download CV
              </BorderBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;