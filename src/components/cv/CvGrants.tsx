import { CvSection, CvDd, SubLink } from "./CvSection";

export function CvGrants() {
  return (
    <CvSection id="grants" title="Research Grants">
      <dl>
        <dt className="font-bold mt-0"><SubLink href="https://www.osti.gov/dataexplorer/biblio/dataset/1487473">Metagenomics of Viral and Microbial Communities Inhabiting Warm, Anoxic Fluids of the Sediment-Buried Deep Ocean Crust</SubLink></dt>
        <CvDd className="ml-5 mt-1 mb-2">
          <span className="font-medium">DOE Joint Genome Institute Community Sequencing Program</span><br />
          <span className="text-sm">Lead-PI M. Rappé; Co-PIs G. Steward, S. Jungbluth, O. Nigro</span><br />
          <span className="text-sm">2015</span>
        </CvDd>

        <dt className="font-bold mt-5">Promoting Scientific Collaborations, Networking and Professional Development Among C-MORE's Next-Generation</dt>
        <CvDd className="ml-5 mt-1 mb-2">
          <span className="font-medium">Center for Microbial Oceanography: Research and Education (C-MORE) EDventures Program</span><br />
          <span className="text-sm">Co-funded with C-MORE Professional Development Organizing Committee</span><br />
          <span className="text-sm">2012</span><br />
          <span className="text-sm">$22,486</span>
        </CvDd>

        <dt className="font-bold mt-5"><SubLink href="https://www.darkenergybiosphere.org/award/metagenomics-metatranscriptomics-and-single-cell-genomics-of-microbial-communities-inhabiting-juan-de-fuca-ridge-flank-borehole-fluids/">Metagenomics, Metatranscriptomics, and Single-Cell Genomics of Microbial Communities Inhabiting Juan de Fuca Ridge Flank Borehole Fluids</SubLink></dt>
        <CvDd className="ml-5 mt-1 mb-2">
          <span className="font-medium">Center for Dark Energy Biosphere Investigations (C-DEBI) Research Support Program</span><br />
          <span className="text-sm">Co-funded with M. Rappé</span><br />
          <span className="text-sm">2011</span><br />
          <span className="text-sm">$45,494</span>
        </CvDd>
      </dl>
    </CvSection>
  );
}
