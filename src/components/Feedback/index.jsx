import React from "react";
import nghia from "@/assets/img/auth.jpg";
import vuong from "@/assets/img/vuong.jpg";
import { useTheme } from "../ThemeMode";
import Slider from "../Slider";
import Contact from "../Contact";
const Feedback = () => {
  const { theme } = useTheme();
  return (
    <section className="testimonial" id={theme}>
      <div className="container">
        <div className="testimonial__heading">
          <h2 className="testimonial__heading-title" id={theme}>
            Testimonial
          </h2>
          <p className="testimonial__heading-script">
            These are some pieces of feed back from teacher as well as mentor at
            CFD studio
          </p>
        </div>

        <Slider
          slidesPerView={1}
          loop
          draggable
          pagination={{ clickable: true }}
          grabCursor
          speed={600}
          className="pb-[70px]"
          spaceBetween={30}
        >
          <div className="testimonial__body">
            <p className="testimonial__body-text">
              “Duy always has the fire of a warrior, he will try his best to
              finished all task in the class of Frontend Web Responsive.”
            </p>
            <div className="testimonial__body-img">
              <img src={nghia} alt="" />
            </div>
            <p className="testimonial__body-auth">Mr Tran Nghia</p>
            <div className="testimonial__body-info">CEO of CFD CIRCLE</div>
          </div>
          <div className="testimonial__body">
            <p className="testimonial__body-text">
              “I have some time teaching and working with Duy and I figure out
              he has a lot of potential in him to go far in this industry.”
            </p>
            <div className="testimonial__body-img">
              <img src={vuong} alt="" />
            </div>
            <p className="testimonial__body-auth">Mr Dang Thuyen Vuong</p>
            <div className="testimonial__body-info">Teacher at CFD CIRCLE</div>
          </div>
        </Slider>

        <Contact />
      </div>
    </section>
  );
};

export default Feedback;
