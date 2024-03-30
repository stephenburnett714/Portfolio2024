import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ideation from "../assets/IdeationLarge.png";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <div className="py-32 flex flex-col px-5">
        <div className="justify-center self-center pb-4 text-4xl">
          Contact Information
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-left items-center lg:w-full lg:justify-around">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <a
                href="mailto: Stephenburnett714@gmail.com.com"
                className="flex items-center"
                style={{ textDecoration: "none", color: "light-blue" }}
              >
                <span className="pr-4 self-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "black" }}
                    size="2x"
                  />
                </span>
                <span className="text-black lg:text-lg">
                  Email: Stephenburnett714@gmail.com
                </span>
              </a>
            </div>

            <div className="flex flex-row py-4">
              <a
                href="https://www.linkedin.com/in/stephen-burnett/"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "light-blue" }}
              >
                <span className="pr-4 self-center">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "black" }}
                    size="2x"
                  />
                </span>
                <span className="text-black lg:text-lg">
                  LinkedIn: Linkedin.com/in/stephen-burnett
                </span>
              </a>
            </div>

            <div className="flex flex-row">
              <a
                href="https://github.com/stephenburnett714"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "light-blue" }}
              >
                <span className="pr-4 self-center">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "black" }}
                    size="2x"
                  />
                </span>
                <span className="text-black lg:text-lg">
                  Github: Github.com/stephenburnett714
                </span>
              </a>
            </div>
          </div>

          <div>
            <img className="pt-5 lg:pt-0" src={ideation} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
