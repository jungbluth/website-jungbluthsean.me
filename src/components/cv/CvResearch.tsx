import { CvSection, CvSubHeader } from "./CvSection";

export function CvResearch() {
  return (
    <CvSection id="research-experience" title="Research Experience">
      <CvSubHeader>Fieldwork</CvSubHeader>
      <p className="mb-4"><strong>Almost 0.5 years of sea-going experience on 18 open-ocean research cruises, including three cruises with deep submersible ROV Jason, four cruises with deep submersible HOV Alvin, and one with AUV Sentry.</strong></p>
      <ul className="list-disc ml-6 space-y-1.5 text-sm">
        <li>Atlantic Continental Shelf, URI Inner Space Center shore-based participant, AT36 (August 3–8, 2016)</li>
        <li>Atlantic Continental Shelf, R/V Atlantis – DSV Alvin II cruise participant, AT36 (July 28–August 2, 2016)</li>
        <li>Juan de Fuca Ridge (JdFR) flank, R/V Atlantis – DSV Alvin II cruise participant, AT26-18 (August 10–24, 2014)</li>
        <li>JdFR flank, R/V Atlantis – ROV JASON-II cruise participant, AT26-03 (July 13–26, 2013)</li>
        <li>North Pacific Subtropical Gyre (NPSG), R/V Kilo Moana cruise participant, KM12-23 & HOT 247 (October 6–10, 2012)</li>
        <li>NPSG, R/V Kilo Moana cruise participant, KM12-18 & HOT 245 (August 16–20, 2012)</li>
        <li>NPSG, R/V Kilo Moana cruise participant, KM12-16 & HOT 244 (July 30–August 3, 2012)</li>
        <li>NPSG, R/V Kilo Moana cruise participant, KM12-13 & HOT 243 (June 25–29, 2012)</li>
        <li>NPSG, R/V Ka'Imikai-O-Kanaloa cruise participant, KOK12-05 & HOT 242 (May 29–June 2, 2012)</li>
        <li>NPSG, R/V Ka'Imikai-O-Kanaloa cruise participant, KOK12-02 & HOT 241 (April 30–May 4, 2012)</li>
        <li>NPSG, R/V Kilo Moana cruise participant, KM12-05 & HOT 240 (March 23–27, 2012)</li>
        <li>NPSG, R/V Ka'Imikai-O-Kanaloa cruise participant, KOK12-01 & HOT 239 (January 17–21, 2012)</li>
        <li>JdFR flank, R/V Atlantis – ROV JASON-II cruise participant, AT18-07 (June 28–July 14, 2011)</li>
        <li>JdFR flank, D/V JOIDES Resolution shore-based participant, IODP Expedition 327 (2010)</li>
        <li>JdFR flank, R/V Atlantis – ROV JASON-II cruise participant, AT15-66 (June 13–July 1, 2010)</li>
        <li>JdFR flank and ridge-axis, R/V Atlantis – DSV Alvin cruise participant, AT15-51 (August 20–September 6, 2009)</li>
        <li>Waianae Coast, Oahu, Hawaii, R/V Kilo Moana cruise participant, KM09-06 (February 12–15, 2009)</li>
        <li>JdFR flank, R/V Atlantis – DSV Alvin cruise participant, AT15-35 (July 24–August 14, 2008)</li>
      </ul>
    </CvSection>
  );
}
