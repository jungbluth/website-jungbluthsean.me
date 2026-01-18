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

  // For short CV, temporarily hide sections not in the list
  if (type === 'short') {
    const sections = document.querySelectorAll('.cv-content section');
    sections.forEach(section => {
      if (!shortSections.includes(section.id)) {
        section.dataset.originalDisplay = section.style.display;
        section.style.display = 'none';
      }
    });
  }

  // Trigger browser print dialog
  window.print();

  // Restore hidden sections after print dialog closes
  if (type === 'short') {
    setTimeout(() => {
      const sections = document.querySelectorAll('.cv-content section');
      sections.forEach(section => {
        if (section.dataset.originalDisplay !== undefined) {
          section.style.display = section.dataset.originalDisplay;
          delete section.dataset.originalDisplay;
        }
      });
    }, 1000);
  }
}
