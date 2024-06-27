// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <div className="text-gray-200 text-sm lg:text-lg flex flex-col gap-5 ">
            <span>
              👋 Hi there! I’m Swasti Sundar Pradhan, a passionate web developer
              with a flair for crafting stunning and efficient websites. Armed
              with a 🎓 BTech from{" "}
              <span className="text-pink-500"> NIT Rourkela </span> and
              expertise in the
              <span className="text-pink-500"> MERN stack </span> and WordPress,
              I've delivered top-notch projects like innovative SaaS platforms
              Datapixl and PrevHealth.
            </span>
            <span>
              🚀<span className="text-pink-500"> A hackathon enthusiast</span>,
              I love pushing the boundaries of technology and creativity. My
              journey in web development has been marked by continuous learning
              and adaptation to new trends.
            </span>
            <span>
              💡<span className="text-pink-500">Let's collaborate</span> and
              turn your vision into a digital masterpiece. Check out my work and
              let's make something amazing together!
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Abu Said"
            className=" lg:rounded-2xl rounded-3xl  transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
