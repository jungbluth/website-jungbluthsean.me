import { CvSection, PubLink } from "./CvSection";

export function CvBooks() {
  return (
    <CvSection id="book-chapters" title="Book Chapters">
      <ul className="list-disc ml-6 space-y-2">
        <li>Magnabosco C, Biddle JF, Cockell CS, <strong>Jungbluth SP</strong>, Twing KI. (2019). <PubLink href="https://www.cambridge.org/core/books/deep-carbon/biogeography-ecology-and-evolution-of-deep-life/FC59FEA2D8660E6555F0AA91822FE417">"Biogeography, ecology, and evolution of deep life"</PubLink>. In: Orcutt BN, Daniel I, Dasgupta R (ed). <em>Deep Carbon: Past to Present</em>. Cambridge University Press.</li>
        <li>Biddle JF, <strong>Jungbluth SP</strong>, Lever MA, Rappé MS. (2014). <PubLink href="https://www.degruyterbrill.com/serial/lee-b/html">"Life in the ocean crust"</PubLink>. In: Kallmeyer J (ed). <em>Life in Extreme Environments: The Deep Biosphere</em>. DeGruyter.</li>
      </ul>
    </CvSection>
  );
}
