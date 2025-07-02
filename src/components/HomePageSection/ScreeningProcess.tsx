import {PiArrowBendUpRightBold, PiArrowDown } from "react-icons/pi";
import { SiAmazoncognito } from "react-icons/si";
import step1 from "../../assets/ScreeningProcess/step1.png";
import step2 from "../../assets/ScreeningProcess/step2.png";
import step3 from "../../assets/ScreeningProcess/step3.png";
import step4 from "../../assets/ScreeningProcess/step4.png";

const ScreeningProcess = () => {
  const steps = [
    {
      id: 1,
      image: step1,
      title1: "M.I.I.T.",
      title2: "SCREENING",
      bgColor: "#03257E",
    },
    {
      id: 2,
      image: step2,
      title1: "INTELLIGENCE TYPE",
      title2: "Interest and Talent",
      bgColor: "#006666",
    },
    {
      id: 3,
      image: step3,
      title1: "PERSONALISED",
      title2: "Career Mapping",
      bgColor: "#F14419",
    },
    {
      id: 4,
      image: step4,
      title1: "CAREER",
      title2: "Path Chosen",
      bgColor: "#FFAA04",
    },
  ];
  const stepsOverview = [
    {
      id: 1,
      image: step1,
      title: "MIIT Screening",
      desc: "This includes brief description about each of the nine types of Multiple Intelligences as per the M.I.Theory given Professor Howard Gardner (of Harvard University) as detailed in his book Frames of Mind, 1983.",
      bgColor: "#03257E",
    },
    {
      id: 2,
      image: step2,
      title: "INTELLIGENCE",
      desc: "This includes your M.I.I.T. Screening Results which depicts your top 3 dominant Intelligence Types",
      bgColor: "#006666",
    },
    {
      id: 3,
      image: step3,
      title: "PERSONALISED",
      desc: "This includes your Career Mapping Report and will help you to select suitable Career(s) in sync with your M.I.I.T. Screening Results.",
      bgColor: "#F14419",
    },
    {
      id: 4,
      image: step4,
      title: "CAREER",
      desc: "This includes information about Next Steps and how our platform can help you in a personalized manner to achieve your career path.",
      bgColor: "#FFAA04",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-10" id="miit-process">
        <p className="text-[#03257e] text-4xl font-bold text-center" data-aos="fade-up">MIIT SCREENING PROCESS</p>
      <div className="flex justify-center items-center flex-wrap gap-12 p-2 sm:p-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative flex flex-col justify-center items-center gap-2 sm:gap-6 border-2 border-[${step.bgColor}] rounded-lg p-2 sm:p-6 w-[250px]`}
            style={{ borderColor: step.bgColor }}
          >
            <div className="absolute top-[40px] left-[-35px] bg-white rounded-lg p-2">
              <div
                className="rounded-lg p-2"
                style={{ backgroundColor: step.bgColor }}
              >
                <div className="flex flex-col justify-center items-center border-1 border-white rounded-lg px-1" data-aos="zoom-in">
                  <p className="uppercase text-white">step</p>
                  <p className="text-2xl text-white font-bold -mt-2">
                    0{step.id}
                  </p>
                </div>
              </div>
            </div>
            {step.id!=4&&<div className="absolute top-[40px] right-[-25px] bg-white rounded-lg p-2 xmscreen-hidden" data-aos="fade-right">
              <PiArrowBendUpRightBold
                className="size-10"
                style={{ color: step.bgColor }}
              />
            </div>}
            {step.id!=4&&<div className="absolute bottom-[-35px]  bg-white rounded-lg py-1 px-2 hidden xmscreen-visible" data-aos="fade-down">
              <PiArrowDown
                className="size-10"
                style={{ color: step.bgColor }}
              />
            </div>}
            {step.id===4&&<div className="absolute top-[40px] right-[-25px] bg-white rounded-lg p-2 hidden md:block" data-aos="fade-right">
              <PiArrowBendUpRightBold
                className="size-10"
                style={{ color: step.bgColor }}
              />
            </div>}
            {step.id===4&&<div className="absolute bottom-[-35px]  bg-white rounded-lg py-1 px-2 md:hidden" data-aos="fade-down">
              <PiArrowDown
                className="size-10"
                style={{ color: step.bgColor }}
              />
            </div>}
            {step.id === 4 && (
              <div className="absolute top-[40px] right-[-100px] bg-white rounded-lg p-2 hidden md:block" data-aos="fade-up">
                <SiAmazoncognito className="text-[#03257e] size-14" />
                <p className="text-black font-bold text-center ">
                  Student's <br></br>Verified<br></br>Profile
                </p>
              </div>
            )}
            {step.id === 4 && (
              <div className="absolute flex flex-col justify-center items-center bottom-[-130px] bg-white rounded-lg p-2 md:hidden">
                <SiAmazoncognito className="text-[#03257e] size-14" />
                <p className="text-black font-bold text-center ">
                  Student's Verified Profile
                </p>
              </div>
            )}

            <img src={step.image} alt="icon" className="w-fit h-20 mt-20" data-aos="zoom-in"></img>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl text-black font-semibold" data-aos="zoom-in">{step.title1}</p>
              <p className="text-[#000000] uppercase -mt-2" data-aos="zoom-in">{step.title2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6 p-6 w-full mt-[100px] sm:mt-0">
        {stepsOverview.map((steps)=>(
            <div className="flex justify-start items-center gap-4 w-full">
            <img src={steps.image} alt="icon" className="w-fit h-24" data-aos="fade-right"></img>
            <div>
                <p className="text-[#03257e] text-xl sm:text-2xl md:text-3xl font-bold" data-aos="fade-left">{`0${steps.id} - ${steps.title}`}</p>
                <p className="text-black text-xl" data-aos="fade-up">{steps.desc}</p>
            </div>
        </div>))}
      </div>
      <div className="text-center py-10 px-12 w-full bg-[#03257e] text-xl " data-aos="zoom-in">
        <p className="text-white">It is a known fact that youngsters choose their career path(s) either by peer pressure or by parents’ wishes and they only consider a few choices like becoming an Engineer, Doctor, MBA, IAS or a CA. They just do not consider knowing about their interests and passion in a formal way, map it with relevant career path options (outside of mainstream ones) and get relevantly skilled. Therefore, they face the issue of Unemployment. Our end to end solution of Edubuk helps these youngsters first to discover their passion, intelligence type, interests, talent (using our 2 step: MIIT Screening process) and then map it with relevant career paths (a buffet of more than 60 career path options for each individual); narrow these career path options to 1-2 options (using our automated 6 metrics counseling tool); get themselves relevantly skilled to accomplish their chosen career goal.</p>
      </div>
    </div>
  );
};

export default ScreeningProcess;
