import { CvSection, PubLink } from "./CvSection";

export function CvPreprints() {
  return (
    <CvSection id="preprints" title="Preprints">
      <ul className="list-disc ml-6 space-y-2">
        <li>Orcutt BN, D'Angelo T, <strong>Jungbluth SP</strong>, Huber JA, Sylvan JB. (2020). <PubLink href="https://osf.io/2wxe6/">Microbial life in oceanic crust</PubLink>. <em>OSF Preprints</em>.</li>
      </ul>
    </CvSection>
  );
}
