import { CvSection, CvDd, SubLink } from "./CvSection";
import { useCvDark } from "./CvDarkModeContext";

export function CvEducation() {
  const dark = useCvDark();
  const subColor = dark ? "#7a8a98" : "#666";
  return (
    <CvSection id="education" title="Education">
      <dl>
        <dt className="font-bold mt-0"><SubLink href="https://www.wisc.edu/">University of Wisconsin at Madison</SubLink></dt>
        <CvDd>B.S., Biology and Bacteriology - 2003-2007</CvDd>
        <dd className="ml-10 mb-1 text-sm" style={{ color: subColor }}>- University of Wisconsin at Waukesha, General Education</dd>
        <dd className="ml-10 mb-1 text-sm" style={{ color: subColor }}>- <SubLink href="https://www.uww.edu/">University of Wisconsin at Whitewater</SubLink>, Computer Science and Pre-Business</dd>
        <dd className="ml-10 mb-1 text-sm" style={{ color: subColor }}>- <SubLink href="https://www.uq.edu.au/">University of Queensland, Australia</SubLink>, Marine Science and Biology</dd>
        <dd className="ml-10 mb-1 text-sm" style={{ color: subColor }}>- <SubLink href="https://ku.ac.ug/">Kampala University</SubLink>, Uganda, Public Health</dd>

        <dt className="font-bold mt-3"><SubLink href="https://manoa.hawaii.edu/">University of Hawaii at Manoa</SubLink></dt>
        <CvDd>Ph.D., <SubLink href="https://www.soest.hawaii.edu/oceanography/">Department of Oceanography</SubLink> and <SubLink href="https://www.himb.hawaii.edu/">Hawaii Institute of Marine Biology</SubLink> - 2008-2014</CvDd>
        <dd className="ml-10 mb-1 text-sm" style={{ color: subColor }}>- Dissertation title: Microbial ecology in the sediment-covered ocean basement of the Juan de Fuca Ridge</dd>

        <dt className="font-bold mt-3"><SubLink href="https://manoa.hawaii.edu/">University of Hawaii at Manoa</SubLink></dt>
        <CvDd>Postdoctoral Research Associate, <SubLink href="https://www.soest.hawaii.edu/oceanography/">Department of Oceanography</SubLink> - 2014-2015</CvDd>

        <dt className="font-bold mt-3"><SubLink href="https://www.usc.edu/">University of Southern California</SubLink></dt>
        <CvDd>Postdoctoral Research Associate, <SubLink href="https://dornsife.usc.edu/earth/">Department of Earth Sciences</SubLink> - 2015-2016</CvDd>
        <dd className="ml-10 mb-1 text-sm" style={{ color: subColor }}>- UNOLS Deep-Submergence Chief Scientist Training</dd>

        <dt className="font-bold mt-3"><SubLink href="https://www.doe.gov/">US Department of Energy</SubLink>, <SubLink href="https://www.lbl.gov/">Lawrence Berkeley National Laboratory</SubLink></dt>
        <CvDd>Computational Biologist Postdoctoral Fellow, <SubLink href="https://jgi.doe.gov/">Joint Genome Institute</SubLink> - 2017-2019</CvDd>
      </dl>
    </CvSection>
  );
}
