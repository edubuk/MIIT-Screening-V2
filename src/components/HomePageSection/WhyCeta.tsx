import whycetaImg from '../../assets/whyCeta.png';
import keyIcon1 from '../../assets/keyIcon/keyIcon1.png';
import keyIcon2 from '../../assets/keyIcon/keyIcon2.png';
import keyIcon3 from '../../assets/keyIcon/keyIcon3.png';
import keyIcon4 from '../../assets/keyIcon/keyIcon4.png';
import keyIcon5 from '../../assets/keyIcon/keyIcon5.png';
import keyIcon6 from '../../assets/keyIcon/keyIcon6.png';   
import keyIcon7 from '../../assets/keyIcon/keyIcon7.png';

const WhyCeta = () => {

    const keyData =[
        {
            title: "Identifies True Strengths",
            description: "Goes beyond marks to uncover hidden talents and aptitudes.",
            icon:keyIcon1,
            iconBg:"#03257E"

        },
        {
            title: "Personalized Career Guidance",
            description: "Matches each student to the right fields and job roles",
            icon:keyIcon2,
            iconBg:"#006666"
        },
        {
            title: "Data-Driven & Scientific",
            description: "Based on established psychological and career-matching models",
            icon:keyIcon3,
            iconBg:"#f14419"
        },
        {
            title: "Boosts Confidence & Clarity",
            description: "Helps students make decisions aligned with their potential.",
            icon:keyIcon4,
            iconBg:"#FFAA04"
        },
        {
            title: "Prevents Misguided Choices",
            description: "Reduces chances of academic or career dissatisfaction.",
            icon:keyIcon5,
            iconBg:"#3ec8d4"
        },
        {
            title: "Used by Leading Institutions",
            description: "Trusted by schools and colleges for effective counselling.",
            icon:keyIcon6,
            iconBg:"#1860ca"
        },
        {
            title: "Supports Parents & Educators",
            description: "Provides actionable insights for better support and planning.",
            icon:keyIcon7,
            iconBg:"#000080"
        }
    ]
  return (
    <div className="flex flex-col justify-center items-center gap-8" id='why-miit'>
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center" data-aos="fade-right">
          Why MIIT Screening?
        </p>
        <div className='flex justify-center items-center md:gap-8 lg:gap-10 lg:px-20'>
            <div className='flex flex-col justify-center items-center gap-4 px-4' data-aos="fade-left">
                <p className='text-[#03257e] text-[20px] sm:text-[25px] md:text-[30px] w-max-[700px] text-center font-bold'>Why Scientific Intelligence & Interest Mapping Matters for Career Success?</p>
                <p className='text-black max-w-max-[700px] text-center'>
                    Choosing the right career shouldn't be guesswork. Every student has a unique combination of intelligences, interests, and natural abilities. 
                    MIIT Screening by Edubuk uses a scientific approach to map these traits to the most suitable career paths and job roles—enabling students to make informed, confident, and personalized decisions about their future. 
                    Backed by research in Multiple Intelligences and Interest Theory, this tool empowers youth to align their learning and career planning with who they truly are.
                </p>
            </div>
            <div className='hidden sm:flex' data-aos="zoom-in">
                <img src={whycetaImg} className='w-fit h-auto'></img>
            </div>
        </div> 
        <div className='flex flex-col justify-center items-center w-full'>
            <p className='text-[#03257e] text-[20px] sm:text-[25px] md:text-[30px] text-center font-bold px-4'>Why MIIT Screening Is Important?</p>
            <div className='flex flex-wrap justify-center items-center'>
                {keyData.map((item, index) => (
                    <div key={index} className={`flex flex-col justify-center items-center gap-2 m-4  rounded-[20px] shadow-lg w-[300px]`} style={{backgroundColor:`${item.iconBg}`}}>
                        <img src={item.icon} alt={item.title} className={`w-16 h-16 my-4`} data-aos= "zoom-in"/>
                        <div className='flex flex-col justify-center items-center px-4 py-5 rounded-[20px] bg-[white]' data-aos="zoom-in">
                        <p className='text-[#03257e] text-[18px] font-semibold'>{item.title}</p>
                        <p className='text-black text-center'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>   
      </div>
  );
}

export default WhyCeta;