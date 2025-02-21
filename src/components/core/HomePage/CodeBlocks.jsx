import React from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between flex-col lg:flex-row lg:gap-10 gap-10`}>
      {/* Section 1 */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Code Block Section */}
      <div className="h-fit code-border flex flex-row py-3 text-sm leading-6 relative w-[100%] lg:w-[470px] bg-[#282c34] rounded-md p-4 overflow-auto">
        {backgroundGradient}
        
        {/* Line Numbers */}
        <div className="text-center flex flex-col w-[10%] select-none text-[#5c6370] font-mono font-bold">
          {[...Array(11)].map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>
        
        {/* Code Block */}
        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}>
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            omitDeletionAnimation={true}
            style={{ whiteSpace: "pre-line", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
