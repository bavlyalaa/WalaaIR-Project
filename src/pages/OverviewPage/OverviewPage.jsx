import FirstSubSection from "./OverviewPageSubSections/firstSubSection/FirstSubSection";
import Disclosures from "./OverviewPageSubSections/secondSubSection/Disclosures";
import ThiredSubSection from "./OverviewPageSubSections/thiredSUbSection/ThiredSubSection";

const OverviewPage = () => {
  return (
    <div className="container py-3">
      <FirstSubSection/>
      <Disclosures/>
      <ThiredSubSection />
    </div>
  );
};

export default OverviewPage;
