import FirstSubSection from "./OverviewPageSubSections/firstSubSection/FirstSubSection";
import Disclosures from "./OverviewPageSubSections/secondSubSection/Disclosures";
import ThiredSubSection from "./OverviewPageSubSections/thiredSUbSection/ThiredSubSection";
import "./OverviewPage.css";

const OverviewPage = () => {
  return (
    <div className="overview-container m-4">
      <FirstSubSection/>
      <Disclosures/>
      <ThiredSubSection />
    </div>
  );
};

export default OverviewPage;