import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-full flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-1/2 flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col gap-3 mb-7">
              <img src={Logo} alt="Company Logo" className="object-contain w-32" />
              <h1 className="text-richblack-50 font-semibold text-lg">Company</h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <Link
                    key={i}
                    to={`/${ele.toLowerCase()}`}
                    className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 mb-7">
              <h1 className="text-richblack-50 font-semibold text-lg">Resources</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => (
                  <Link
                    key={index}
                    to={`/${ele.split(" ").join("-").toLowerCase()}`}
                    className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-lg mt-7">Support</h1>
              <Link
                to="/help-center"
                className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2"
              >
                Help Center
              </Link>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 mb-7">
              <h1 className="text-richblack-50 font-semibold text-lg">Plans</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => (
                  <Link
                    key={index}
                    to={`/${ele.split(" ").join("-").toLowerCase()}`}
                    className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-lg mt-7">Community</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => (
                  <Link
                    key={index}
                    to={`/${ele.split(" ").join("-").toLowerCase()}`}
                    className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-1/2 flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/3 mb-7">
                <h1 className="text-richblack-50 font-semibold text-lg">{ele.title}</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {ele.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm text-center">
        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
          {BottomFooter.map((ele, i) => (
            <Link
              key={i}
              to={`/${ele.split(" ").join("-").toLowerCase()}`}
              className="px-3 border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
            >
              {ele}
            </Link>
          ))}
        </div>
        <div className="mt-3 sm:mt-0">Made with ❤️ CodeHelp © 2023 Studynotion</div>
      </div>
    </div>
  );
};

export default Footer;
