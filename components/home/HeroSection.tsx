import Image from "next/image";

// image
import headerImg from "@/public/assets/img/Pinac Workspace Header Image.svg";
import planet from "@/public/assets/img/red-green planet.svg";

const HeroSection = () => {
  return (
    <section className="2xl-2:h-screen w-full flex flex-col items-center 2xl-2:fixed">
      <div
        className="3xl:mt-[128px] flex flex-col justify-center relative z-40
                  2xl:mt-[118px] xl:mt-[95px] lg:mt-[90px] md:mt-[80px] mt-[60px]"
      >
        <span
          className="font-bold 3xl:text-[122px] 3xl:leading-[127px] text-light font-nasa 
                    2xl:text-[112px] 2xl:leading-[120px] xl:text-[92px] xl:leading-[102px]
                    lg:text-[80px] lg:leading-[90px] md:text-[60px] md:leading-[70px] text-[40px] leading-[40px]"
        >
          PINAC
        </span>
        <span
          className="font-bold 3xl:text-[150px] 3xl:leading-[127px] text-light font-nasa 
                    2xl:text-[140px] 2xl:leading-[120px] xl:text-[120px] xl:leading-[102px]
                    lg:text-[108px] lg:leading-[90px] md:text-[80px] md:leading-[70px] text-5xl leading-[40px]"
        >
          Workspace
        </span>
        <Image
          alt="header design"
          src={headerImg}
          priority={true}
          className="h-auto w-1/2 object-cover absolute bottom-4 right-0"
        />
      </div>
      <button className="bg-primary/60 backdrop-blur-sm text-sm lg:text-base text-white font-Catamaran tracking-wider rounded-full py-2 lg:py-2.5 px-6 lg:px-12 mt-6 lg:mt-8 hover:bg-gray-800/70 focus:outline-none z-40">
        Get Started
      </button>
      <div className="absolute 2xl-2:top-[150px] 2xl:top-[235px] xl:top-[198px] lg:top-[193px] sm:top-[100px] top-[125px]">
        <Image
          src={planet}
          alt="planet image"
          priority={true}
          className="object-cover"
        />
        <div className="2xl-2:hidden w-full h-px absolute bottom-px bg-primary shadow-darkCloudSmall" />
      </div>
    </section>
  );
};

export default HeroSection;
