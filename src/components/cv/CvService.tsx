import { CvSection, CvSubHeader, SubLink } from "./CvSection";

export function CvService() {
  return (
    <CvSection id="service" title="Professional Teaching and Service">
      <CvSubHeader>Teaching</CvSubHeader>
      <ul className="list-disc ml-6 space-y-2 mb-5">
        <li>Thesis Advisor, SFSU Computational Sciences Graduate Program - 2024-present</li>
        <li>Guest Lecturer, Stanford University, OCEANS/ESS 269: Environmental Microbial Genomics - 2020-present</li>
        <li>Instructor, Hangzhou, China, Global Subseafloor Ecosystem and Sustainability Workshop - 2025</li>
        <li>Guest Lecturer, SFSU, MSCI 709: Foundations in Interdisciplinary Marine and Estuarine Science - 2024</li>
        <li>Teaching Assistant, LBNL "Long-read Isolate Sequencing and Assembly Workshop" - December 2023</li>
        <li>Teaching Assistant, UH Manoa, OCN 201/201L: Introductory Oceanography Laboratory - Fall 2008</li>
        <li>Undergraduate TA, UW Madison, BACT304: Procaryotic Microbiology Laboratory - Fall 2006</li>
      </ul>

      <CvSubHeader>Professional and Panel Service</CvSubHeader>
      <ul className="list-disc ml-6 space-y-2 mb-5">
        <li>UNESCO Global Subseafloor Ecosystem and Sustainability (GSES) Program - Advisory Board Member - 2025-2030</li>
        <li>ISME Climate Change Committee - Member - 2024-present</li>
        <li>Pool of Experts (PoE) of the United Nations Regular Process for Global Reporting - Member - 2024-present</li>
        <li>United Nations Ocean Decade Vision 2023 Plan - Working Group 2 - Member - 2023-2024</li>
        <li>NOAA 'Omics Working Group - Environmental Biomolecular Observations Subcommittee - 2024</li>
        <li>Panelist, NASA Astrobiology: Habitable Worlds - 2024</li>
        <li>Panelist, NSF Understanding the Rules of Life: Microbiome Theory and Mechanisms - 2020</li>
        <li>President, C-MORE Professional Development Organizing Committee - 2013</li>
        <li>Divemaster, UW Madison Hoofer's SCUBA Club - 2006-2008</li>
        <li>Treasurer, UW Madison Hoofer's SCUBA Club - 2006-2007</li>
        <li>Public Relations Chair, UW Madison Pre-Veterinary Club - 2004-2006</li>
      </ul>

      <CvSubHeader>Workshop Organization</CvSubHeader>
      <ul className="list-disc ml-6 space-y-2 mb-5">
        <li>Co-organizer and co-moderator, C-MORE Networking Workshop at ASLO Aquatic Sciences Meeting, New Orleans, LA - 2013</li>
        <li>Co-organizer and co-moderator, C-MORE Careers in Ocean Sciences Workshop, Honolulu, HI - 2012</li>
      </ul>

      <CvSubHeader>Research Network Participation</CvSubHeader>
      <ul className="list-disc ml-6 space-y-2 mb-5">
        <li><strong>C-DEBI Research Coordination Network (RCN) Workshops:</strong>
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>"Subseafloor Ocean Biosphere and Borehole Observatory Science" - Kona, HI - 2009</li>
            <li>"Deep Biosphere Sediment Microbiology" - Chapel Hill, NC - 2010</li>
            <li>"Ocean Crust Processes and Consequences for Life" - Bremen, Germany - 2011</li>
          </ul>
        </li>
        <li><strong><SubLink href="https://hahana.soest.hawaii.edu/cmoreserver/">C-MORE</SubLink> Participant</strong> - NSF Science and Technology Center, UH Manoa - 2008-2015</li>
        <li><strong><SubLink href="https://www.darkenergybiosphere.org/">C-DEBI</SubLink> Participant</strong> - NSF Science and Technology Center, USC - 2010-2016</li>
      </ul>

      <CvSubHeader>Community Outreach</CvSubHeader>
      <ul className="list-disc ml-6 space-y-2">
        <li>Lecturer, "Investigating Novel Microbial Life in the Deep Igneous Oceanic Crust", Community College Instructors Workshop, USC sponsored by C-DEBI - 2016</li>
        <li>Lecturer and Activity Lead, "Microbial Life Inside the Seafloor", EARTH Mini-Workshop, Kaimuki Middle School - 2015</li>
        <li>Judge, Hawaii State Science and Engineering Fair - 2009-2010, 2012, 2014-2015</li>
        <li>Lecturer, "C-DEBI Research & Astrobiology" workshops across Hawaii schools - 2013-2014</li>
        <li>Contributor, SOEST Graduate Student Blog - 2013</li>
        <li>Research Scientist Participant, Deep Earth Academy Ship-to-Shore Scientist Interviews - 2011, 2013</li>
        <li>Member, C-MORE Professional Development Organizing Committee - 2011-2013</li>
        <li>Tour Guide, Hawaii Institute of Marine Biology Community Education Program - 2009-2014</li>
      </ul>
    </CvSection>
  );
}
