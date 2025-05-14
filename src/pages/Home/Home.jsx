import AgencyIntro from "../../components/Home/AgencyIntro";
import AwardsSection from "../../components/Home/AwardsSection";
import Banner from "../../components/Home/Banner";
import BlogSection from "../../components/Home/BlogSection";
import Services from "../../components/Home/Services";
import TeamSection from "../../components/Home/TeamSection";
import TestimonialSection from "../../components/Home/TestimonialSection";
import VideoSection from "../../components/Home/VideoSection";
import WorkSection from "../../components/Home/WorkSection";
import Navbar from "../../shared/Navbar/Navbar";
import ScrollToTopBtn from "../../shared/ScrollToTopBtn";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AgencyIntro />
      <VideoSection/>
      <Services />
      <WorkSection />
      <AwardsSection />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
      <ScrollToTopBtn />
    </>
  );
};

export default Home;
