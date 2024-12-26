"use client";
import React, { useState, useEffect } from "react";

const FeatureSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Deep Think",
      description:
        "It automatically understands your needs and generates expert-level prompts, ensuring you get precise and relevant answers tailored just for you without being a prompt engineer!",
      gradient: "from-[#8A2BE2] to-[#300384]",
    },
    {
      title: "Privacy + +",
      description:
        "No user data stored on our server. Your Data only on Your Machine.",
      gradient: "from-[#00B472] to-[#02BDA4]",
    },
    {
      title: "Cleanest Interface",
      description:
        "We provide the most polished distraction-free interface for your work.",
      gradient: "from-[#FF512F] to-[#DD2476]",
    },
    {
      title: "Wide Range of Model Accessibility",
      description:
        "From our models to your own API Key to locally running open-source models, your curiosity can never stop",
      gradient: "from-[#4E65FF] to-[#2BE3FF]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section className="w-full py-16 pb-20 flex flex-col items-center bg-primary shadow-darkCloud">
      {/*       Heading         */}
      {/* ===================== */}
      <span
        className="space-x-3 pb-8 xl:text-5xl xl:leading-[70px] lg:text-4xl lg:leading-[60px] md:text-3xl md:leading-[45px] text-2xl
                text-center md:font-bold font-semibold tracking-wide font-Catamaran text-light left-[1%]"
      >
        Next-Gen features that <br /> makes it Worth It
      </span>

      {/*      Features Grid for above 768px       */}
      {/* ======================================== */}
      <div className="max-w-[90%]">
        <div
          className="hidden lg:grid h-auto 2xl:grid-cols-3 lg:grid-cols-2
                      2xl-3:gap-7 2xl:gap-5 xl:gap-5 gap-4"
        >
          {/* Deep Think Card */}
          <div
            className="xl:row-span-2 xl:col-span-1 lg:col-span-2
                      3xl:p-6 xl:p-5 p-4
                      2xl:rounded-3xl rounded-2xl
                      bg-gradient-to-r from-[#8A2BE2] to-[#300384] text-white flex flex-col justify-between"
          >
            <div className="flex items-center xl:mb-0 lg:mb-4 mb-2">
              <h2
                className="2xl:text-2xl lg:text-xl text-lg
                        font-bold font-Catamaran tracking-wide"
              >
                {features[0].title}
              </h2>
            </div>
            <p
              className="2xl:text-lg xl:text-base text-sm
                        font-sans tracking-wide 
                        2xl:max-w-[275px] xl:max-w-[380px]"
            >
              {features[0].description}
            </p>
          </div>

          {/* Privacy Card */}
          <div
            className="3xl:p-6 xl:p-5 p-4
                      2xl:rounded-3xl rounded-2xl
                      bg-gradient-to-r from-[#00B472] to-[#02BDA4] text-white"
          >
            <div className="flex items-center gap-2 lg:mb-4 mb-2">
              <h2
                className="2xl:text-2xl lg:text-xl text-lg
                        font-bold font-Catamaran tracking-wide"
              >
                {features[1].title}
              </h2>
            </div>
            <p
              className="2xl:text-lg xl:text-base text-sm
                        font-sans tracking-wide
                        2xl:max-w-[249px] xl:max-w-[360px]"
            >
              {features[1].description}
            </p>
          </div>

          {/* Cleanest Interface Card */}
          <div
            className="3xl:p-6 xl:p-5 p-4
                      2xl:rounded-3xl rounded-2xl
                      bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white"
          >
            <div className="flex items-center gap-2 lg:mb-4 mb-2">
              <h2
                className="2xl:text-2xl lg:text-xl text-lg
                        font-bold font-Catamaran tracking-wide"
              >
                {features[2].title}
              </h2>
            </div>
            <p
              className="2xl:text-lg xl:text-base text-sm
                        font-sans tracking-wide
                        2xl:max-w-[240px] xl:max-w-[360px]"
            >
              {features[2].description}
            </p>
          </div>

          {/* Model Accessibility Card */}
          <div className="lg:col-span-2 3xl:p-6 xl:p-5 p-4 2xl:rounded-3xl rounded-2xl bg-gradient-to-r from-[#4E65FF] to-[#2BE3FF] text-white">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="2xl:text-2xl lg:text-xl text-lg xl:max-w-[271px] font-bold font-Catamaran tracking-wide lg:mb-4 mb-2">
                  {features[3].title}
                </h2>
                <p className="2xl:text-lg xl:text-base text-sm font-sans tracking-wide 2xl:max-w-[360px] xl:max-w-[430px]">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*       Slider view for below 768px        */}
        {/* ======================================== */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`min-w-full p-4 rounded-2xl text-white 
                    bg-gradient-to-r ${features[currentSlide].gradient}`}
                >
                  <div className="flex items-center mb-2">
                    <h2 className="text-lg font-bold font-Catamaran tracking-wide">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-sm font-sans tracking-wide">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider dots */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
