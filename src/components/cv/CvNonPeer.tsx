import { CvSection, PubLink } from "./CvSection";

export function CvNonPeer() {
  return (
    <CvSection id="non-peer-reviewed" title="Non-Peer Reviewed">
      <ul className="list-disc ml-6 space-y-2">
        <li>Muller-Karger FE, <em>et al.</em>, <strong>Jungbluth S</strong>, <em>et al.</em> (2024). <PubLink href="https://doi.org/10.25607/Y60M-4329">Ocean Decade Vision 2030 white papers - challenge 2: Protect and restore ecosystems and biodiversity</PubLink>. <em>UNESCO-IOC</em>.</li>
        <li><strong>Atlantis Expedition AT36 Shipboard Parties</strong>. (2016). AT36 cruise report: Early career scientist deep submergence training.</li>
        <li>Böttjer D, <strong>Jungbluth SP</strong>, <em>et al.</em> (2014). <PubLink href="https://tos.org/oceanography/article/career-choices-in-marine-and-environmental-sciences-navigating-a-sea-of-opt">Career choices in marine and environmental sciences: navigating a sea of options</PubLink>. <em>Oceanography</em> 27(4): 37-43.</li>
        <li>Fisher AT, <em>et al.</em>, <strong>Jungbluth SP</strong>, <em>et al.</em> (2014). <PubLink href="https://www.darkenergybiosphere.org/wp-content/uploads/docs/AT26-18%20JFR%20Cork%20Recovery%20Cruise%20Report%20reduced.pdf">Cruise report for R/V Atlantis/ROV Jason-II Expedition AT26-03</PubLink>.</li>
      </ul>
    </CvSection>
  );
}
