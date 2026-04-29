import { CvSection, SubLink } from "./CvSection";

export function CvSocieties() {
  return (
    <CvSection id="societies" title="Membership in Professional Societies (known inactive indicated)">
      <ul className="list-disc ml-6 space-y-2">
        <li><SubLink href="https://isme-microbes.org/">International Society for Microbial Ecology (ISME)</SubLink></li>
        <li><SubLink href="https://www.aslo.org/">Association for the Sciences of Limnology and Oceanography (ASLO)</SubLink></li>
        <li><SubLink href="https://tos.org/">The Oceanography Society (TOS)</SubLink></li>
        <li><SubLink href="https://www.mtsociety.org/">Marine Technology Society (MTS)</SubLink></li>
        <li><SubLink href="https://www.agu.org/">American Geophysical Union (AGU)</SubLink> [inactive]</li>
        <li><SubLink href="https://www.aaas.org/">American Association for the Advancement of Science (AAAS)</SubLink> [inactive]</li>
        <li><SubLink href="https://asm.org/">American Society for Microbiology (ASM)</SubLink></li>
      </ul>
    </CvSection>
  );
}
