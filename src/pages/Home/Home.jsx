import AgencyIntro from "../../components/Home/AgencyIntro";
import AwardsSection from "../../components/Home/AwardsSection";
import Banner from "../../components/Home/Banner";
import Services from "../../components/Home/Services";
import TeamSection from "../../components/Home/TeamSection";
import TestimonialSection from "../../components/Home/TestimonialSection";
import WorkSection from "../../components/Home/WorkSection";

const Home = () => {
  return (
    <>
      <Banner />
      <AgencyIntro />
      <Services />
      <WorkSection />
      <AwardsSection />
      <TeamSection/>
      <TestimonialSection/>
    </>
  );
};

export default Home;
