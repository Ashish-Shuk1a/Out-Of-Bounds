import Qiskit from "../../images/logos/QiskitHero.png";
import Arrow from "../../images/shapes/Arrow.png";
import GDGAlgiers from "../../images/logos/GDGAlgiers-white.png";
import CounterContainer from "./CounterContainer";
import Maqam from "../../images/shapes/MaqamWhite.png";
import Atom from "../../images/shapes/atomWhite.png";
import Globe from "../../images/shapes/globe.png";
import Computer from "../../images/shapes/computerWhite.png";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import Event from "../Event/Event";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen max-w-screen overflow-hidden hero-bg"
    >
      <div className="section-container pb-24 md:pb-0 ">
        {/* <Navbar /> */}
        <div className="flex flex-col gap-16 lg:gap-0 relative">
          <div className="w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
            <img src={Atom} />
          </div>
          <div className="w-12 h-12 absolute top-12 left-[90%] lg:top-4 lg:left-1/4">
            <img src={Globe} />
          </div>
          <div className="hidden lg:block w-16 h-16 absolute top-4 right-16">
            <img src={Maqam} />
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <h1 className="font-bold text-center lg:text-left text-4xl lg:text-5xl 2xl:text-6xl leading-[4.5rem]">
                <Typewriter
                  options={{
                    strings: ["Your Event,Our Expertise"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                Your chance to discover the Events world!
              </p>
              <div className="flex items-end">
                <div className="relative h-[67px] animate-bounce  w-[67px] 2xl:w-[101px] 2xl:h-[114px]">
                  <img src={Arrow} layout="fill" />
                </div>
                <div className="mb-[-50px] 2xl:mb-[-60px] cursor-not-allowed">
                  <button className=" navbutton text-xl p-8 text-white font-extrabold bg-blue-600 rounded-2xl">
                    <span>Register Now!</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 pt-20 lg:pt-0 order-first lg:order-last">
              <Tilt>
                <img src={Qiskit} />
              </Tilt>
            </div>
          </div>

          <div className="hidden lg:flex">
            <img src={GDGAlgiers} />
          </div>
          {/* <div className="flex items-center">
            <CounterContainer countDownLimit={1666425600000} />
          </div> */}

          <div className="w-12 h-12 absolute bottom-16 left-8">
            <img src={Atom} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-8">
            <img src={Globe} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-2/4">
            <img src={Computer} />
          </div>
        </div>

      </div>
      <Event />
      
    </section>
  );
};

export default Hero;