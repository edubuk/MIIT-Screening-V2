import multiIntelli from "../../assets/multiInteligence.png";
import sixPersonality  from '../../assets/sixPersonality.png';

const MultipleIntelligence = () => {

    const intelliTypes = [
        {
            id:1,
            title:"Linguistic Intelligence or Word Smart",
            desc:"Linguistic Intelligence, or Word Smart, is the ability to effectively use language for reading, writing, speaking, and understanding communication.",
            color:"#F5831E"
        },
        {
            id:2,
            title:"Naturalistic Intelligence or Nature Smart",
            desc:"Naturalistic Intelligence, or Nature Smart, is the ability to recognize, categorize, and draw upon features of the environment such as plants, animals, and weather patterns.",
            color:"#FFD704"
        },
        {
            id:3,
            title:"Logical-Mathematical Intelligence or (Number and Reasoning Smart)",
            desc:"Logical-Mathematical Intelligence, or Number and Reasoning Smart, is the ability to think logically, solve problems, and work with numbers and abstract concepts.",
            color:"#98C93B"
        },
        {
            id:4,
            title:"Naturalist Intelligence or Nature Smart",
            desc:"Naturalist Intelligence, or Nature Smart, is the ability to identify, understand, and interact effectively with elements of the natural world like plants, animals, and ecosystems.",
            color:"#09AAA6"
        },
        {
            id:5,
            title:"Visual-Spatial Intelligence (Picture Smart)",
            desc:"Visual-Spatial Intelligence, or Picture Smart, is the ability to think in images, visualize accurately, and understand spatial relationships between objects.",
            color:"#04A6E0"
        },
        {
            id:6,
            title:"Musical Intelligence (Music Smart)",
            desc:"Musical Intelligence, or Music Smart, is the ability to recognize, create, and interpret rhythm, melody, pitch, and sound patterns.",
            color:"#0471BA"
        },
        {
            id:7,
            title:"Bodily-Kinesthetic Intelligence (Body Smart)",
            desc:"Bodily-Kinesthetic Intelligence, or Body Smart, is the ability to use one’s body skillfully to express ideas, perform tasks, or solve problems through physical movement.",
            color:"#1B1668"
        },
        {
            id:8,
            title:"Intrapersonal Intelligence (Self- Smart)",
            desc:"Intrapersonal Intelligence, or Self-Smart, is the ability to understand one’s own emotions, thoughts, and motivations to make informed decisions and self-reflect.",
            color:"#9E499A"
        },
        {
            id:9,
            title:"Existential Intelligence (Life-Smart)",
            desc:"Existential Intelligence, or Life-Smart, is the ability to ponder deep questions about life, existence, purpose, and the universe.",
            color:"#E3453C"
        },
    ]

    const personalityTypes = [
        {
            id:1,
            title:"Realistic",
            desc:"Individuals who like to work with their hands, tools, and machines, often preferring outdoor work.",
            color:"#03257E"
        },
        {
            id:2,
            title:"Investigative",
            desc:"Those who enjoy discovery, research, and problem-solving, often drawn to scientific or analytical fields. ",
            color:"#006666"
        },
        {
            id:3,
            title:"Artistic",
            desc:"Individuals who prefer expressive activities like art, music, or writing, often seeking creative outlets.",
            color:"#F14419"
        },
        {
            id:4,
            title:"Social",
            desc:"People who enjoy working with others, helping, and providing guidance, often drawn to teaching, counseling, or social work.",
            color:"#FFAA04"
        },
        {
            id:5,
            title:"Enterprising",
            desc:"Individuals who like leadership, persuasion, and business, often seeking sales, management, or political roles.",
            color:"#3EC8D4"
        },
        {
            id:6,
            title:"Conventional",
            desc:"Those who enjoy order, accuracy, and following procedures, often drawn to accounting, administration, or data entry.",
            color:"#1860CA"
        }
    ]
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-10 p-6">
      <p className="text-2xl text-black font-bold text-center" data-aos="zoom-in">M.I.I.T. SCREENING</p>
      <p className="text-2xl text-black text-center" data-aos="zoom-in">1. Nine Types of Multiple Intelligences</p>
      <img src={multiIntelli} alt="multi-intelli-img" className="w-fit h-[300px] sm:h-[450px]" data-aos="zoom-in"></img>
        <div className="flex justify-center items-baseline gap-6 p-2 sm:p-12 w-full flex-wrap">
      {intelliTypes.map((type)=>(
        <div key={type.id} className="flex flex-col justify-center items-center gap-4 w-auto sm:w-[360px] text-center" >
            <p className="text-4xl text-white font-bold rounded-full p-10" style={{backgroundColor:type.color}} data-aos="zoom-in">0{type.id}</p>
            <p className="text-blak text-xl font-bold text-black text-center" data-aos="zoom-in">{type.title}</p>
            <p className="text-xl text-black text-center" data-aos="zoom-in">{type.desc}</p>
        </div>))}
         </div>
         <p className="text-2xl text-black text-center" data-aos="zoom-in">2. Six Categories of Holland’s Theory</p>
         <p className="text-xl text-black text-center mb-4" data-aos="zoom-in">Holland's Theory of Career Choice suggests that individuals find greater career fulfillment when their personality aligns with the work environment. The theory categorizes personality types and corresponding environments into six categories: <strong>Realistic, Investigative, Artistic, Social, Enterprising, and Conventional,</strong> known as <strong>RIASEC.</strong> </p>
         <p className="text-2xl text-black text-center font-bold" data-aos="zoom-in">Six Personality Types (RIASEC)</p>
         <img src={sixPersonality} alt="six-personality" className="w-fit h-[300px] sm:h-[450px]" data-aos="zoom-in"></img>
         <div className="flex justify-center items-center gap-10 p-12 w-full flex-wrap">
            {
                personalityTypes.map((type)=>(
                    <div key={type.id} className=" relative flex justify-center items-center gap-4 p-6 border-2 w-[300px] h-auto sm:h-[150px]" style={{borderColor:type.color}}>
                        {/* <p className="absolute top-[-20px] left-[-20px] text-black rounded-full border-2 px-4 py-2 font-bold bg-white" style={{borderColor:type.color}} data-aos="zoom-in">{type.id}</p> */}
                        <p className="absolute top-[-20px] left-[-20px] text-black rounded-full border-2 px-4 py-2 font-bold bg-white" style={{borderColor:type.color}} data-aos="zoom-in">{type.id}. {type.title}</p>
                        <p className="text-black" data-aos="zoom-in">{type.desc}</p>
                    </div>
                ))
            }
         </div>
    </div>
  )
}

export default MultipleIntelligence;
