import { CvSection, SubLink } from "./CvSection";

export function CvEditorial() {
  return (
    <CvSection id="editorial" title="Editorial Board Appointments">
      <ul className="list-disc ml-6 space-y-2">
        <li><strong><SubLink href="https://academic.oup.com/ismecommun">ISME Communications</SubLink></strong> - Editorial Board Member - 2024-2027</li>
        <li><strong><SubLink href="https://www.nature.com/sdata/">Scientific Data</SubLink></strong> - Editorial Board Member - 2026-2028</li>
      </ul>
    </CvSection>
  );
}
