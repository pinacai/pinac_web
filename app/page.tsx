import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AppPreview from "@/components/home/AppPreview";
import FeatureSection from "@/components/home/FeatureSection";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <Navbar />
      </div>
      <main className="flex flex-col">
        <HeroSection />
        <div className="flex flex-col items-center 2xl-2:mt-[100vh] 2xl:mt-[20vh] xl:mt-[10vh] lg:mt-[10vh] sm:mt-[10vh] mt-[30px] 2xl-2:z-40 relative">
          <AppPreview />
          <FeatureSection />
        </div>
      </main>
    </>
  );
};

export default Home;
export const runtime = "edge"; // 'nodejs' | 'edge'
