import { CvSection, CvDd, SubLink, PubLink } from "./CvSection";
import { useCvDark } from "./CvDarkModeContext";

export function CvPersonal() {
  const dark = useCvDark();
  return (
    <CvSection id="personal" title="Personal">
      <div className="flex gap-5 sm:gap-7 items-start flex-col sm:flex-row">
        <img
          src="/profile.jpg"
          alt="Sean P. Jungbluth"
          className="rounded-full object-cover flex-shrink-0 mx-auto sm:mx-0 transition-all duration-300"
          style={{
            width: 120,
            height: 120,
            border: dark ? "3px solid rgba(100,180,255,0.3)" : "3px solid rgba(0,115,230,0.3)",
            boxShadow: dark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.1)",
          }}
        />
        <dl className="m-0">
          <dt className="font-bold mt-0">Name:</dt>
          <CvDd>Sean P. Jungbluth, Ph.D.</CvDd>

          <dt className="font-bold mt-3">Current Position:</dt>
          <CvDd>
            PI/Group Lead, <SubLink href="https://eoscenter.sfsu.edu/">Estuary and Ocean Science Center</SubLink>, Tiburon, CA<br />
            <SubLink href="https://biology.sfsu.edu/">Adjunct Professor of Biology</SubLink>, <SubLink href="https://www.sfsu.edu/">San Francisco State University</SubLink>, San Francisco, CA<br />
            Research Affiliate, <SubLink href="https://www.lbl.gov/">Lawrence Berkeley National Laboratory</SubLink>, Berkeley, CA
          </CvDd>

          <dt className="font-bold mt-3">Research Interests:</dt>
          <CvDd>
            Molecular biodiversity, ecology, data science, eDNA metabarcoding, machine learning and AI, biological oceanography, autonomous and remote-operated vehicles, microbial genomics, metagenomics, bioinformatics, computational biology, field-based sampling
          </CvDd>

          <dt className="font-bold mt-3">Email:</dt>
          <CvDd><PubLink href="mailto:seanj.lab@gmail.com">seanj.lab@gmail.com</PubLink></CvDd>

          <dt className="font-bold mt-3">Lab Homepage:</dt>
          <CvDd><PubLink href="https://jungbluthlab.org">jungbluthlab.org</PubLink></CvDd>
        </dl>
      </div>
    </CvSection>
  );
}
