import { Link } from "react-router-dom";

export function BasicSite() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.5)" }}
      />

      <div
        className="relative z-10 overflow-y-auto max-h-[90vh] backdrop-blur-xl"
        style={{
          background: "rgba(255,255,255,0.5)",
          padding: "40px",
          borderRadius: "20px",
          color: "#1a1a1a",
          width: "min(90vw, 900px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        <header className="mb-5">
          <img
            src="/profile.jpg"
            alt="Sean Jungbluth"
            className="rounded-full mb-2.5 mx-auto"
            style={{ width: 150, height: 150, objectFit: "cover" }}
          />
          <h1
            className="mb-1"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Sean Jungbluth
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#444" }}>
            Explorer, Scientist, Educator, Husband, Father
          </p>
        </header>

        <section className="mb-5">
          <h2 className="mb-2.5" style={{ fontSize: "2rem" }}>
            About Me
          </h2>

          {/* Desktop about — ASCII journey map */}
          <div
            className="hidden md:block"
            style={{ fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}
          >
            <p className="whitespace-pre">
              {"Brisbane \u{1F1E6}\u{1F1FA} (0.5y)               at sea \u{1F30A}⛴️\u{1F30A} (0.5y)"}
            </p>
            <p className="whitespace-pre">
              {"↗                                         ↗              |"}
            </p>
            <p className="whitespace-pre">
              <strong>Wisconsin (23y)</strong>
              {" --> "}
              <strong>Honolulu, HI (10y)</strong>
              {" --> "}
              <strong>Bay Area, CA (8y)</strong>
            </p>
            <p className="whitespace-pre">
              {"    ↘                                                     |"}
            </p>
            <p className="whitespace-pre">
              {"        Kampala \u{1F1FA}\u{1F1EC} (1m)                          ↙"}
            </p>
            <p className="whitespace-pre">
              {"                                                         deep-sea \u{1F41F}\u{1F30C}\u{1F419} (3x; 2650m)"}
            </p>
            <p>&nbsp;</p>
            <p>
              * Lectures occasionally at Stanford on microbial genomics and comp
              bio
            </p>
            <p>* Never rejected from college or grad school (IYKYK)</p>
          </div>

          {/* Mobile about */}
          <div
            className="block md:hidden"
            style={{ fontSize: "1rem", maxWidth: 600, margin: "0 auto" }}
          >
            <p className="mb-2">
              <strong>
                Wisconsin (23y) → Honolulu, HI (10y) → Bay Area, CA (8y)
              </strong>
            </p>
            <p>
              <strong>Travels:</strong> Brisbane {"\u{1F1E6}\u{1F1FA}"}, Kampala{" "}
              {"\u{1F1FA}\u{1F1EC}"}, deep-sea {"\u{1F30A}"} (3x)
            </p>
          </div>
        </section>

        <section className="mb-0 pb-0">
          <div className="flex flex-wrap justify-center gap-2.5 mb-2.5">
            <Link
              to="/cv"
              className="no-underline transition-all duration-200"
              style={{
                fontSize: "0.95rem",
                color: "#0073e6",
                padding: "8px 18px",
                borderRadius: "50px",
                background: "rgba(0,115,230,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#005bb5";
                e.currentTarget.style.background = "rgba(0,115,230,0.18)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,115,230,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#0073e6";
                e.currentTarget.style.background = "rgba(0,115,230,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >CV</Link>
            <BasicLink href="https://scholar.google.com/citations?user=ks7jmJgAAAAJ&hl=en">
              Google Scholar
            </BasicLink>
            <BasicLink href="https://orcid.org/0000-0001-9265-8341">
              ORCID
            </BasicLink>
            <BasicLink href="https://jungbluthlab.org">Lab</BasicLink>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 mb-2.5">
            <BasicLink href="https://github.com/jungbluth">GitHub</BasicLink>
            <BasicLink href="https://bsky.app/profile/seanjungbluth.bsky.social">
              BlueSky
            </BasicLink>
            <BasicLink href="https://x.com/seanjungbluth">X/Twitter</BasicLink>
            <BasicLink href="https://www.linkedin.com/in/sean-jungbluth-2230b314">
              LinkedIn
            </BasicLink>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 mb-2.5">
            <BasicLink href="mailto:jungbluth.sean@gmail.com">
              Personal Email
            </BasicLink>
            <BasicLink href="mailto:seanj.lab@gmail.com">
              Business Email
            </BasicLink>
          </div>
        </section>

        <p className="mt-5" style={{ fontSize: "0.95rem", color: "#444" }}>
          Looking to meet? Schedule time on my calendar{" "}
          <a
            href="https://calendly.com/jungbluth-sean"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
            style={{ color: "#0073e6" }}
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function BasicLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="no-underline transition-all duration-200"
      style={{
        fontSize: "0.95rem",
        color: "#0073e6",
        padding: "8px 18px",
        borderRadius: "50px",
        background: "rgba(0,115,230,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#005bb5";
        e.currentTarget.style.background = "rgba(0,115,230,0.18)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,115,230,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#0073e6";
        e.currentTarget.style.background = "rgba(0,115,230,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </a>
  );
}
