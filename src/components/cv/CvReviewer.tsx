import { CvSection, SubLink } from "./CvSection";

export function CvReviewer() {
  return (
    <CvSection id="reviewer" title="Reviewer For">
      <p className="mb-3">
        <strong>Journals:</strong>{" "}
        <SubLink href="https://journals.asm.org/journal/aem">Applied and Environmental Microbiology</SubLink> |{" "}
        <SubLink href="https://www.nature.com/npjbiofilms/">Biofilms and Microbiomes</SubLink> |{" "}
        <SubLink href="https://academic.oup.com/bioinformatics">Bioinformatics</SubLink> |{" "}
        <SubLink href="https://bmcgenomics.biomedcentral.com/">BMC Genomics</SubLink> |{" "}
        <SubLink href="https://www.nature.com/commsbio/">Communications Biology</SubLink> |{" "}
        <SubLink href="https://www.sciencedirect.com/journal/computational-and-structural-biotechnology-journal">Computational and Structural Biotechnology</SubLink> |{" "}
        <SubLink href="https://sfamjournals.onlinelibrary.wiley.com/journal/14622920">Environmental Microbiology</SubLink> |{" "}
        <SubLink href="https://environmentalmicrobiome.biomedcentral.com/">Environmental Microbiome</SubLink> |{" "}
        <SubLink href="https://academic.oup.com/femsec">FEMS Microbiology Ecology</SubLink> |{" "}
        <SubLink href="https://www.frontiersin.org/journals/microbiology">Frontiers in Microbiology</SubLink> |{" "}
        <SubLink href="https://academic.oup.com/ismecommun">ISME Communications</SubLink> |{" "}
        <SubLink href="https://www.nature.com/ismej">ISME Journal</SubLink> |{" "}
        <SubLink href="https://aslopubs.onlinelibrary.wiley.com/journal/19395590">Limnology & Oceanography</SubLink> |{" "}
        <SubLink href="https://www.springer.com/journal/248">Microbial Ecology</SubLink> |{" "}
        <SubLink href="https://microbiomejournal.biomedcentral.com/">Microbiome</SubLink> |{" "}
        <SubLink href="https://journals.asm.org/journal/msystems">mSystems</SubLink> |{" "}
        <SubLink href="https://www.nature.com/nbt/">Nature Biotechnology</SubLink> |{" "}
        <SubLink href="https://peerj.com/">PeerJ</SubLink> |{" "}
        <SubLink href="https://journals.plos.org/plosone/">PLoS ONE</SubLink> |{" "}
        <SubLink href="https://www.nature.com/sdata/">Scientific Data</SubLink> |{" "}
        <SubLink href="https://www.nature.com/srep/">Scientific Reports</SubLink>
      </p>
      <p className="mb-3">
        <strong>Funding Agencies:</strong>{" "}
        <SubLink href="https://www.nasa.gov/">National Aeronautics and Space Administration</SubLink> (Astrobiology: Habitable Worlds) |{" "}
        <SubLink href="https://www.noaa.gov/">National Oceanic and Atmospheric Administration</SubLink> (Small Business Innovation Research) |{" "}
        <SubLink href="https://www.nsf.gov/">National Science Foundation</SubLink> (Biological Oceanography; CAREER; Marine Geology and Geophysics; Understanding the Rules of Life)
      </p>
      <p>
        <strong>Other:</strong>{" "}
        <SubLink href="https://www.soest.hawaii.edu/">University of Hawaii at Manoa SOEST</SubLink> TGIF Mini-Grant Program Proposals (2012-2013)
      </p>
    </CvSection>
  );
}
