import AgencyIntro from "../../components/Home/AgencyIntro";
import AwardsSection from "../../components/Home/AwardsSection";
import Banner from "../../components/Home/Banner";
import Services from "../../components/Home/Services";
import WorkSection from "../../components/Home/WorkSection";

const Home = () => {
  return (
    <>
      <Banner />
      <AgencyIntro />
      <Services />
      <WorkSection />
      <AwardsSection />
    </>
  );
};

export default Home;
