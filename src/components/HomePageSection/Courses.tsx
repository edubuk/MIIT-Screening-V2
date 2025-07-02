
import course1 from "../../assets/Courses/course1.jpg";
import course2 from "../../assets/Courses/course2.jpg";
import course3 from "../../assets/Courses/course3.jpg";
import course4 from "../../assets/Courses/course4.jpg";
import course5 from "../../assets/Courses/course5.jpg";
import course6 from "../../assets/Courses/course6.jpg";
import course7 from "../../assets/Courses/course7.jpg";
import course8 from "../../assets/Courses/course8.jpg";
import { GoArrowUpRight } from "react-icons/go";


const Courses = () => {
  const courses = [
    {
      banner: course1,
      link: "https://edubuklms.com/home/course/artificial-intelligence/9",
    },
    {
      banner: course2,
      link: "https://edubuklms.com/home/course/blockchain/10",
    },
    {
      banner: course3,
      link: "https://edubuklms.com/home/course/prompt-engineering/12",
    },
    {
      banner: course4,
      link: "https://edubuklms.com/home/course/generative-ai/13",
    },
    {
      banner: course5,
      link: "https://edubuklms.com/home/course/cybersecurity/14",
    },
    {
      banner: course6,
      link: "https://edubuklms.com/home/course/cloud-computing/15",
    },
    {
      banner: course7,
      link: "https://edubuklms.com/home/course/data-analytics/11",
    },
    {
      banner: course8,
      link: "https://edubuklms.com/home/course/data-visualization/16",
    },
  ];

  return (
    <div className="w-full px-2 text-center py-10 bg-gradient-to-br from-[#f1f5f9] to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 px-2 ">
          Explore Our Current Live Courses
        </h2>
        <p className="text-lg text-gray-600 mb-10 px-2">
          Learn the latest in technology through expertly curated courses like-
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {courses.map((course, idx) => (
            <div className=" flex justify-center items-center flex-col gap-2 border-1 border-[#03257e] rounded-xl">
              <img
                src={course.banner}
                key={idx}
                className={`w-fit h-40 rounded-t-xl shadow-lg flex items-center justify-center text-xl font-semibold text-gray-800 transition-transform transform hover:scale-105 cursor-pointer`}
              ></img>
              <div className="bg-[#03257e] flex justify-center items-center gap-2 px-2 py-1 rounded-lg mb-2">
              <a
          href={course.link}
          target="_blank"
          rel="noreferrer"
          className=" text-white text-lg font-medium cursor-pointer"
        >
          Explore More
        </a>
        <GoArrowUpRight />
        </div>
            </div>
          ))}
        </div>

        <a
          href="https://edubuklms.com/"
          className="bg-[#0f172a] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#1e293b] transition"
        >
          Go to Courses
        </a>
      </div>
    </div>
  );
};

export default Courses;
