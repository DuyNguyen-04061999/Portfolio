import useAsync from "@/hooks/useAsync";
import useForm from "@/hooks/useForm";
import { emailService } from "@/service/email.service";
import { cn } from "@/utils";
import { min, regex, require } from "@/utils/validate";
import { message } from "antd";
import React from "react";
import Button from "../Button";
import Field from "../Field";
import { useTheme } from "../ThemeMode";

const Contact = () => {
  const { theme } = useTheme();
  const { execute: sendEmailService, loading } = useAsync(
    emailService.sendEmail
  );
  const { validate, register, form, reset } = useForm({
    subject: [require({ message: "Please insert the purpose you contact me" })],
    company: [require({ message: "Please let me know your company" })],
    email: [
      require({ message: "Please insert your email address" }),
      regex("email", "Please enter the right email"),
    ],
    content: [
      require({ message: "Please insert the content of your purpose" }),
      min(8, "Your content should be at least 8 characters"),
    ],
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await sendEmailService(form);
        if (res?.text === "OK") {
          message.success(
            "Sending email successfully, I will contact you as soon as possible. Thank you"
          );
          reset();
        }
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <div className={cn("contact", theme)} id="contact">
      <div className={cn("contact__info", theme)}>
        <h3 className="contact__info-title">CONTACT</h3>
        <span className="contact__info-script">
          If you have demand for working with me, please contact follow these
          information
        </span>

        <div className="contact__info-details" id={theme}>
          <a
            href="https://goo.gl/maps/NfxcvkxL8JSTiu486"
            target="_blank"
            className="item"
          >
            <div className="icon">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 3.4804C13.4087 1.8891 11.2504 0.995117 8.99999 0.995117C6.74955 0.995117 4.59129 1.8891 2.99999 3.4804C1.40869 5.0717 0.514709 7.22996 0.514709 9.4804C0.514709 11.7308 1.40869 13.8891 2.99999 15.4804L8.26999 20.7604C8.36295 20.8541 8.47356 20.9285 8.59541 20.9793C8.71727 21.0301 8.84798 21.0562 8.97999 21.0562C9.112 21.0562 9.24271 21.0301 9.36457 20.9793C9.48643 20.9285 9.59703 20.8541 9.68999 20.7604L15 15.4304C16.5846 13.8457 17.4749 11.6965 17.4749 9.4554C17.4749 7.21434 16.5846 5.06508 15 3.4804ZM13.57 14.0004L8.99999 18.5904L4.42999 14.0004C3.52713 13.0967 2.91247 11.9456 2.66369 10.6927C2.4149 9.43973 2.54318 8.14115 3.03229 6.96108C3.52141 5.78101 4.34941 4.77245 5.41162 4.06288C6.47383 3.3533 7.72258 2.97458 8.99999 2.97458C10.2774 2.97458 11.5261 3.3533 12.5884 4.06288C13.6506 4.77245 14.4786 5.78101 14.9677 6.96108C15.4568 8.14115 15.5851 9.43973 15.3363 10.6927C15.0875 11.9456 14.4728 13.0967 13.57 14.0004ZM5.99999 6.4104C5.19271 7.22017 4.73939 8.31697 4.73939 9.4604C4.73939 10.6038 5.19271 11.7006 5.99999 12.5104C6.59975 13.1112 7.36358 13.5215 8.19564 13.6898C9.0277 13.8581 9.89094 13.777 10.6771 13.4566C11.4632 13.1361 12.1372 12.5907 12.6145 11.8886C13.0918 11.1866 13.3511 10.3593 13.36 9.5104C13.3645 8.9436 13.2553 8.38166 13.0389 7.85779C12.8225 7.33392 12.5032 6.85875 12.1 6.4604C11.7037 6.05498 11.2311 5.73194 10.7094 5.50986C10.1878 5.28779 9.62733 5.17107 9.06039 5.16643C8.49345 5.16178 7.93119 5.2693 7.40596 5.48279C6.88073 5.69628 6.40291 6.01153 5.99999 6.4104ZM10.69 11.0904C10.311 11.4751 9.8102 11.7163 9.27312 11.7727C8.73603 11.829 8.19605 11.697 7.7455 11.3993C7.29494 11.1016 6.96179 10.6566 6.803 10.1405C6.64421 9.62432 6.66964 9.06904 6.87495 8.56955C7.08026 8.07007 7.45269 7.65741 7.92858 7.40213C8.40446 7.14686 8.95424 7.06481 9.48393 7.17002C10.0136 7.27522 10.4903 7.56116 10.8325 7.97893C11.1747 8.3967 11.3612 8.92037 11.36 9.4604C11.3454 10.0777 11.0865 10.6639 10.64 11.0904H10.69Z" />
              </svg>
            </div>

            <div className="desc">
              <span className="title">Address:</span>
              <span className="info">
                B159/72 Xom Chieu, Ward 16, District 4, Ho Chi Minh city
              </span>
            </div>
          </a>

          <a href="mailto:nguyenduy30234@gmail.com" className="item">
            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
              </svg>
            </div>

            <div className="desc">
              <span className="title">Email:</span>
              <span className="info">nguyenduy30234@gmail.com</span>
            </div>
          </a>
          <a href="tel:0767813755" className="item">
            <div className="icon">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </div>

            <div className="desc">
              <span className="title">Call me now:</span>
              <span className="info">0767813755</span>
            </div>
          </a>
        </div>
      </div>

      <div className="contact__connect">
        <span className="contact__connect-desc">
          In case you cannot contact me, please send me your message. I will
          contact you as soon as possible. Thank you!
        </span>

        <form
          className="contact__connect-form"
          onSubmit={onSubmit}
          autoComplete="off"
          id={theme}
        >
          <Field
            className="item"
            placeholder="Subject"
            name="subject"
            {...register("subject")}
          />
          <Field
            className="item"
            placeholder="Insert name/ company name"
            name="company"
            {...register("company")}
          />
          <Field
            className="item"
            placeholder="Insert email address"
            name="email"
            {...register("email")}
          />
          <Field
            className="item"
            placeholder="Leave a message to me"
            name="content"
            {...register("content")}
            renderInput={(props) => <textarea {...props}></textarea>}
          />

          <Button className="mt-[50px]" type="submit" loading={loading}>
            Send messgage
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[10px]"
            >
              <path
                d="M18.34 7.32013L4.34 0.320128C3.78749 0.0451374 3.16362 -0.0527612 2.55344 0.03978C1.94326 0.132321 1.37646 0.410798 0.930335 0.837244C0.484207 1.26369 0.180456 1.81735 0.060496 2.42274C-0.059464 3.02813 0.0102046 3.65578 0.260003 4.22013L2.66 9.59013C2.71446 9.71996 2.74251 9.85934 2.74251 10.0001C2.74251 10.1409 2.71446 10.2803 2.66 10.4101L0.260003 15.7801C0.0567034 16.2368 -0.029241 16.7371 0.00998036 17.2355C0.0492018 17.7339 0.212345 18.2145 0.484585 18.6338C0.756825 19.0531 1.12953 19.3977 1.56883 19.6363C2.00812 19.875 2.50009 20 3 20.0001C3.46823 19.9955 3.92949 19.8861 4.35 19.6801L18.35 12.6801C18.8466 12.4303 19.264 12.0474 19.5557 11.5742C19.8474 11.101 20.0018 10.556 20.0018 10.0001C20.0018 9.44424 19.8474 8.89928 19.5557 8.42605C19.264 7.95282 18.8466 7.56994 18.35 7.32013H18.34ZM17.45 10.8901L3.45 17.8901C3.26617 17.9784 3.05973 18.0084 2.85839 17.976C2.65705 17.9436 2.47041 17.8504 2.32352 17.709C2.17662 17.5675 2.07648 17.3845 2.03653 17.1846C1.99658 16.9846 2.01873 16.7772 2.1 16.5901L4.49 11.2201C4.52094 11.1484 4.54766 11.075 4.57 11.0001H11.46C11.7252 11.0001 11.9796 10.8948 12.1671 10.7072C12.3546 10.5197 12.46 10.2653 12.46 10.0001C12.46 9.73491 12.3546 9.48056 12.1671 9.29302C11.9796 9.10549 11.7252 9.00013 11.46 9.00013H4.57C4.54766 8.9253 4.52094 8.85184 4.49 8.78013L2.1 3.41013C2.01873 3.22309 1.99658 3.01568 2.03653 2.8157C2.07648 2.61572 2.17662 2.43273 2.32352 2.29128C2.47041 2.14982 2.65705 2.05666 2.85839 2.02428C3.05973 1.9919 3.26617 2.02186 3.45 2.11013L17.45 9.11013C17.6138 9.19405 17.7513 9.32154 17.8473 9.47857C17.9433 9.63561 17.994 9.81608 17.994 10.0001C17.994 10.1842 17.9433 10.3647 17.8473 10.5217C17.7513 10.6787 17.6138 10.8062 17.45 10.8901V10.8901Z"
                fill="white"
              />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
