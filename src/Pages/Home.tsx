import React, { useEffect } from "react";
import sbcomp from "../assets/stephen-comp.png";
import Research from "../assets/R&DLarge.png";
import Development from "../assets/DevelopmentLarge.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div id="home">
        {/* ________________ */}
        {/* Your “go-to” guy */}
        {/* ________________ */}
        <div className="flex flex-col lg:flex-row bg-black text-white pt-24 pb-10 px-12 lg:py-32 lg:px-32">
          <div className="md:w-3/5 flex flex-col">
            <div className="text-4xl pb-4 lg:text-6xl">Software Engineer</div>
            <div className="text-xl lg:text-2xl pb-4">
              <div>
                My name is Stephen and I am a New York based freelancer. I enjoy
                the process of bringing ideas to reality.
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="px-4 half-height" src={sbcomp} alt="" />
          </div>
        </div>
        {/* ___________________ */}
        {/* Work */}
        {/* ___________________ */}
        <div className="px-12 lg:px-32 pt-24">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center md:w-4/5">
              <div className="text-4xl pb-4">Tech Stack</div>
              <div className="text-xl pb-4">
                My current Tech Stack includes Javascript, React, Express, SQL,
                PostgreSQL, HTML, CSS, Ruby, Rails and Sequelize. I enjoy
                front-end engineering. I am currently freelancing while looking
                for work.
              </div>
              <NavLink exact activeClass="active" to="/work">
                <div className="text-blue-500">View Work</div>
              </NavLink>
            </div>
            <div className="flex justify-center md:justify-end pt-2">
              <div>
                <img src={Development} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* ________________ */}
        {/* Stephen Burnett  */}
        {/* ________________ */}
        <div className="px-12 lg:px-32 pt-16 pb-32">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center md:w-4/5">
              <div>
                <div className="text-4xl pb-4">The Coder</div>
                <div className="text-xl pb-4">
                  I am an inquisitive and diligent software engineer who has
                  over six years of consulting experience. I have a passion for
                  problem solving and learning. Consulting has taught me to live
                  in a growth mindset where I strive to be better everyday.
                  Working as a business analyst at Navitas Billing ignited my
                  enthusiasm for coding and ultimately led me to pursue a career
                  change.
                </div>
                <NavLink exact activeClass="active" to="/about">
                  <div className="text-blue-500">More About Stephen</div>
                </NavLink>
              </div>
            </div>

            <div className="flex justify-center md:justify-end pt-2 ">
              <img src={Research} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;