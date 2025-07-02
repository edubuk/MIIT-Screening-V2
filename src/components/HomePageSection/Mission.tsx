import missionImg from '../../assets/mission.png'

const Mission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 sm:pl-4 bg-[#f0f0f0]" id='our-mission'>
            <div className="flex justify-center items-center flex-col gap-4 p-8" data-aos="fade-down">
             <p className="text-[#03257e] text-3xl sm:text-4xl md:text-5xl font-extrabold text-center lg:text-start w-full ">          
              Our Mission & Vision 
              </p>
             <p className="text-black text-xl text-center lg:text-start w-ful ">
              MIIT Screening is Edubuk's AI driven, multiple intelligence and interest-based test — designed to uncover your unique blend of intelligences and passions, and align them with targeted relevant career paths — both Tech and Non Tech.
             </p>
             <p className="text-black text-xl text-center lg:text-start w-full font-extrabold">Vision</p>
            <p className="text-black text-xl text-center lg:text-start w-full">
            To empower every individual to unlock their unique potential through data-driven insights into their intelligences, interests, and talents — enabling a future-ready generation aligned with emerging technologies and meaningful careers.
            </p>
              <p className="text-black text-xl text-center lg:text-start w-full font-extrabold">Mission</p>
              <ul className="text-black text-xl text-start w-full  list-disc">
                <li className='ml-5'>To provide a scientifically validated, accessible, and personalized screening tool based on Multiple Intelligence and Interest Theory.</li>
                <li className='ml-5'>To bridge the gap between talent and career pathways by guiding learners toward their best-fit domains using AI-powered recommendations.</li>
                <li className='ml-5'>To support educators, institutions, and employers in recognizing and nurturing diverse intelligences for a smarter workforce.</li>
                <li className='ml-5'>To build an integrated ecosystem where self-discovery, upskilling, and employability converge seamlessly.</li>
              </ul>
            </div>
            <img src={missionImg} className="w-fit h-auto hidden lg:flex" data-aos="zoom-in"></img>
          </div>
  )
}

export default Mission
