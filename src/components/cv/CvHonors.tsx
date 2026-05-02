import { CvSection, SubLink } from "./CvSection";

export function CvHonors() {
  return (
    <CvSection id="honors" title="Honors & Awards">
      <ul className="list-disc ml-6 space-y-2">
        <li><strong><SubLink href="https://www.anthropic.com/">Anthropic</SubLink> - Claude Community Ambassadors Program</strong> - 2026</li>
        <li><strong><SubLink href="https://www.anthropic.com/">Anthropic</SubLink> - "Built with Claude Sonnet 4.5" Award in "Keep Researching" Category</strong> - 2025</li>
        <li><strong><em>Candidatus</em> Pyrohabitans jungbluthii species namesake designation</strong> - Honorific award for genomic discovery of Archaea phylum "Hydrothermarchaeota" (<SubLink href="https://www.nature.com/articles/sdata201737">Jungbluth et al., 2017</SubLink>; <SubLink href="https://www.science.org/doi/10.1126/sciadv.abm9651">Adam et al., 2022</SubLink>) - 2022</li>
        <li><strong><SubLink href="https://jgi.doe.gov/">Department of Energy Joint Genome Institute</SubLink> Computational Biology Postdoctoral Fellowship</strong> - 2017-2019</li>
        <li><strong><SubLink href="https://www.darkenergybiosphere.org/">Center for Dark Energy Biosphere Investigations (C-DEBI)</SubLink> Graduate Student Fellowship</strong> - $64,000 - 2012-2014</li>
        <li><strong><SubLink href="https://usoceandiscovery.org/fellowships/">Consortium for Ocean Leadership U.S. Science Support Program Schlanger Ocean Drilling Fellowship</SubLink></strong> - $28,000 - 2010-2011</li>
      </ul>
    </CvSection>
  );
}
