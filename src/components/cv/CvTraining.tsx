import { CvSection, CvSubHeader } from "./CvSection";

export function CvTraining() {
  return (
    <CvSection id="training" title="Professional Training and Certifications">
      <CvSubHeader>Technical Certifications and Coursework</CvSubHeader>
      <ul className="list-disc ml-6 space-y-2 mb-5">
        <li>YCombinator Startup School Online Curriculum - 2023</li>
        <li>"Build Basic Generative Adversarial Networks (GANs)" Course, Coursera - 2023</li>
        <li>"Machine Learning" Specialization, Coursera - 2022
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>"Supervised Machine Learning: Regression and Classification"</li>
            <li>"Advanced Learning Algorithms"</li>
            <li>"Unsupervised Learning, Recommenders, Reinforcement Learning"</li>
          </ul>
        </li>
        <li>"Data Analysis for Genomics", Harvard School of Public Health, edX - 2014</li>
        <li>"Web Design", Pacific New Media, UH Outreach College - 2010</li>
        <li>"Digital Imaging", Pacific New Media, UH Outreach College - 2009</li>
      </ul>

      <CvSubHeader>Other Certifications</CvSubHeader>
      <ul className="list-disc ml-6 space-y-2 mb-5">
        <li>Records Management Training - NOAA - 2024</li>
        <li>Counter Threat Awareness Training - US Department of State - 2024</li>
        <li>Certificate in "Art of Leadership", UH Manoa Outreach College - 2014</li>
        <li>SCUBA Divemaster, Rescue, Advanced Diver, and Enriched Air Nitrox - PADI</li>
        <li>Emergency Responder CPR/First Aid - Emergency First Response</li>
        <li>Boat U.S. Foundation for Boating Safety and Clean Water, online certification</li>
      </ul>

      <CvSubHeader>Scientific Conferences, Workshops, and Short-Courses</CvSubHeader>
      <p className="font-bold mb-2">National and International:</p>
      <ul className="list-disc ml-6 space-y-1.5 text-sm mb-5">
        <li>Ocean Best Practices, Online by OceanTeacher Global Academy - 2025</li>
        <li>Contributing and Publishing Datasets to OBIS, OceanTeacher Global Academy - 2024</li>
        <li>Co-design for the Ocean Decade, OceanTeacher Global Academy - 2024</li>
        <li>How to Grow Almost Anything, Harvard/MIT Media Lab - 2024</li>
        <li>LLM Developer Day Workshop, NVIDIA - 2023</li>
        <li>Graph Learning Workshop, Stanford University - 2023</li>
        <li>ASLO Ocean Sciences Meeting, San Diego, CA - 2020</li>
        <li>ASM Annual Meeting, San Francisco, CA - 2019</li>
        <li>JGI Users' Meeting, San Francisco, CA - 2018, 2019</li>
        <li>NeLLi: From New Lineages of Life to New Functions - 2017, 2019</li>
        <li>UC-Davis Biennial Genome Assembly Workshop - 2018</li>
        <li>Archaea: Ecology, Metabolism & Molecular Biology – Gordon Research Conference - 2017</li>
        <li>UNOLS Deep-Submergence Science Leadership Cruise, Woods Hole, MA - 2016</li>
        <li>C-DEBI NSF Site Visit, Los Angeles, CA - 2014, 2016</li>
        <li>AGU Fall Meeting, San Francisco, CA - 2012-2015</li>
        <li>C-DEBI Annual Meetings - 2012, 2013, 2015</li>
        <li>Ecological Dissertations in the Aquatic Sciences Symposium XI, Honolulu, HI - 2014</li>
        <li>UH Astrobiology Institute NASA-Nordic Winter School - 2014</li>
        <li>EU-US Marine Omics Workshop, Newark, DE - 2013</li>
        <li>ASLO Aquatic Sciences Meeting, New Orleans, LA - 2013</li>
        <li>AbSciCon, Atlanta, GA - 2012</li>
        <li>OCEANS '11, Kailua-Kona, HI - 2011</li>
        <li>13th International Symposium for Microbial Ecology, Seattle, WA - 2010</li>
        <li>C-MORE Annual Meetings - 2009, 2011</li>
      </ul>

      <p className="font-bold mb-2">Local (Hawaii and California):</p>
      <ul className="list-disc ml-6 space-y-1.5 text-sm">
        <li>LLNL and UCNL Data Science Workshop, Livermore, CA - 2018</li>
        <li>Effective Communication and Team-Building Workshop, Honolulu, HI - 2014</li>
        <li>"Using QIIME for Microbial Community Analysis", UH Manoa - 2013</li>
        <li>"Career Choices in Oceanography", UH Manoa - 2012</li>
        <li>"Science: Becoming the Messenger", NSF, Honolulu, HI - 2012</li>
        <li>"Introduction to Perl for Bioinformatics", UH Manoa - 2011</li>
        <li>"Introduction to Mac and Linux Command Line for Bioinformatics", UH Manoa - 2010</li>
        <li>"Workshop on microbial sequence data using ARB", UH Manoa - 2009</li>
      </ul>
    </CvSection>
  );
}
