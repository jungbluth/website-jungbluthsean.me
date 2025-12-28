// CV Page JavaScript - TOC Active State Management

document.addEventListener('DOMContentLoaded', function() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  const sections = document.querySelectorAll('.cv-content section');

  // Smooth scroll for TOC links
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Update active TOC link on scroll
  function updateActiveTocLink() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });

    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  // Initial call and scroll listener
  updateActiveTocLink();
  window.addEventListener('scroll', updateActiveTocLink);
});

// PDF Download Function
function downloadCV(type) {
  // Sections to include for short CV (2-page)
  const shortSections = ['personal', 'education', 'positions', 'refereed', 'grants', 'honors'];

  // Create wrapper with print-friendly styles
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    font-family: 'Times New Roman', Times, serif;
    color: #000;
    background: #fff;
    padding: 20px;
    max-width: 800px;
  `;

  // Build content section by section (not using cloneNode on the whole content)
  const sections = document.querySelectorAll('.cv-content section');

  sections.forEach(section => {
    // Skip sections not in shortSections for short CV
    if (type === 'short' && !shortSections.includes(section.id)) {
      return;
    }

    // Clone this section
    const sectionClone = section.cloneNode(true);

    // If this is the research-experience section, surgically remove the map
    if (section.id === 'research-experience') {
      // Get the fieldwork container and list
      const container = sectionClone.querySelector('.fieldwork-container');
      const list = sectionClone.querySelector('.fieldwork-list');

      if (container && list) {
        // Replace the entire container with just the list
        const listClone = list.cloneNode(true);
        container.parentNode.replaceChild(listClone, container);
      }

      // Also remove any script tags
      const scripts = sectionClone.querySelectorAll('script');
      scripts.forEach(s => s.remove());
    }

    wrapper.appendChild(sectionClone);
  });

  // Fix reversed ordered list numbering for PDF (must be done after setting innerHTML)
  const reversedLists = wrapper.querySelectorAll('ol[reversed]');
  reversedLists.forEach(ol => {
    const items = ol.querySelectorAll('li');
    const count = items.length;
    ol.removeAttribute('reversed');
    ol.style.listStyleType = 'none';
    ol.style.paddingLeft = '0';
    items.forEach((li, index) => {
      const num = count - index;
      const numSpan = document.createElement('span');
      numSpan.style.marginRight = '8px';
      numSpan.style.fontWeight = 'normal';
      numSpan.textContent = num + '.';
      li.insertBefore(numSpan, li.firstChild);
    });
  });

  // Style adjustments for PDF
  const style = document.createElement('style');
  style.textContent = `
    h3 {
      background: none !important;
      color: #000 !important;
      border-left: 3px solid #000 !important;
      padding: 5px 10px !important;
      font-size: 14pt !important;
      margin-bottom: 10px !important;
    }
    h4 {
      color: #000 !important;
      font-size: 12pt !important;
      border-bottom: 1px solid #ccc !important;
    }
    a {
      color: #0066cc !important;
    }
    .cv-photo {
      width: 100px !important;
      height: 100px !important;
    }
    .personal-info {
      display: flex;
      gap: 20px;
    }
    ul, ol {
      margin-left: 20px;
    }
    li {
      margin-bottom: 5px;
      font-size: 10pt;
    }
    p, dd, dt {
      font-size: 10pt;
    }
    section {
      margin-bottom: 15px;
    }
        li {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    dt, dd {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    p {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    h3, h4 {
      page-break-after: avoid;
      break-after: avoid;
    }
    .fieldwork-map-wrapper,
    .fieldwork-map,
    #fieldwork-map-container,
    .map-legend {
      display: none !important;
    }
  `;
  wrapper.prepend(style);

  // PDF options
  const filename = type === 'short'
    ? 'JungbluthSP-CV-2page.pdf'
    : 'JungbluthSP-FullCV.pdf';

  const opt = {
    margin: [10, 10, 10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: 'css', before: '.html2pdf__page-break' }
  };

  // Generate PDF
  html2pdf().set(opt).from(wrapper).save();
}
