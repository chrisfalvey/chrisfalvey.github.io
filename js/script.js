// ===== IMAGE PRELOADING =====

const preloadImages = [
  'images/persuasion.jpg',
  'images/lms.jpg',
  'images/ai.jpg'
];

preloadImages.forEach((imagePath) => {
  const img = new Image();
  img.src = imagePath;
});

// ===== NAVIGATION STATE =====

const navCollapse = document.querySelector('#nav');
const navLinks = document.querySelectorAll('.navbar .nav-link[href^="#"]');
const navSections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setActiveNavLink(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${sectionId}`;

    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function updateActiveNavLink() {
  if (!navSections.length) {
    return;
  }

  const activationLine = 140;
  let activeSection = navSections[0];

  navSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= activationLine) {
      activeSection = section;
    }
  });

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeSection = navSections[navSections.length - 1];
  }

  setActiveNavLink(activeSection.id);
}

if (navCollapse) {
  navCollapse.addEventListener('show.bs.collapse', () => {
    document.body.classList.add('mobile-nav-open');
  });

  navCollapse.addEventListener('hidden.bs.collapse', () => {
    document.body.classList.remove('mobile-nav-open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const collapseInstance = window.bootstrap && navCollapse
      ? window.bootstrap.Collapse.getInstance(navCollapse)
      : null;

    if (collapseInstance && navCollapse.classList.contains('show')) {
      collapseInstance.hide();
    }
  });
});

updateActiveNavLink();
window.addEventListener('load', updateActiveNavLink);
window.addEventListener('scroll', updateActiveNavLink, { passive: true });
window.addEventListener('resize', updateActiveNavLink);

const projectPreviews = {
  ai: {
    title: 'AI and the Future of Work',
    image: 'images/ai.jpg',
    summary:
      '<p>Developed as a cross-curricular pilot unit spanning Literacy and Work Related Skills, this project explored the historical and emerging impact of technology and artificial intelligence on visible work, employment, and communication.</p><p>Students were guided through structured observation, reflection, and investigation tasks designed to encourage critical thinking around technological disruption, workplace transformation, and future career pathways.</p><p>The project incorporated multimedia response formats, scaffolded inquiry activities, and blended instructional approaches to support accessibility, flexibility, and contemporary digital literacy development.</p>',
    tools:
      'Focus Areas: Mobile Learning &middot; Multimedia Learning &middot; Inquiry Design &middot; Learner Engagement<br>Tools: Google Classroom &middot; Mobile Learning Activities &middot; Multimedia Response Tasks',
    link: 'case-studies/ai-in-wrs.html',
    cta: 'Explore This Pilot Project'
  },
  persuasion: {
    title: 'Persuasion: VCE VM Literacy Module',
    image: 'images/persuasion.jpg',
    summary:
      '<p>Designed as a targeted response to identified learner and institutional needs within the VCE Vocational Major Literacy program, this scaffolded module explored persuasive language, communication techniques, and media analysis through an applied learning framework.</p><p>The resource was developed for hybrid delivery using Google Classroom and incorporated differentiated learning pathways, extension opportunities, and structured scaffolding to support diverse learner readiness levels.</p><p>Instructional decisions were informed by Cognitive Load Theory principles, with deliberate sequencing across connected modules focused on audience, media formats, persuasion, and later voice and advocacy.</p>',
    tools:
      'Focus Areas: Hybrid Learning &middot; Applied Learning &middot; Cognitive Load Theory &middot; Differentiation<br>Tools: Google Classroom &middot; Google Workspace &middot; Multimedia Learning Resources',
    link: '',
    cta: ''
  },
  mapping: {
    title: 'Curriculum Mapping with Google Sheets',
    image: 'images/lms.jpg',
    summary:
      '<p>This curriculum mapping framework uses Google Sheets to support assessment alignment, curriculum coverage, and transparent tracking of learner progress.</p><p>The project reflects a practical learning systems approach: making curriculum coverage visible, improving moderation conversations, and giving teachers a lightweight way to connect learner evidence with required outcomes.</p>',
    tools:
      'Focus Areas: Learning Analytics &middot; Curriculum Mapping &middot; Data-Informed Design &middot; Data Visualisation<br>Tools: Google Sheets &middot; Google Workspace &middot; Assessment Tracking',
    link: '',
    cta: ''
  },
  planning: {
    title: 'Obsidian and Excalidraw for Instructional Planning',
    image: 'images/persuasion.jpg',
    summary:
      '<p>This professional learning workshop and resource framework demonstrates the use of Obsidian and Excalidraw for curriculum planning, knowledge management, and instructional delivery.</p><p>The project focuses on helping educators externalise planning decisions, connect resources across units, and build reusable instructional design workflows.</p>',
    tools:
      'Focus Areas: Learning Design Tools &middot; Knowledge Management &middot; Systems Thinking &middot; Workflow Design<br>Tools: Obsidian &middot; Excalidraw &middot; Markdown',
    link: '',
    cta: ''
  },
  reflection: {
    title: 'Reflective Practice Job Aid',
    image: 'images/ai.jpg',
    summary:
      '<p>This compact instructional support resource is designed to scaffold reflective practice and metacognitive thinking within applied learning environments.</p><p>The job aid gives learners a structured prompt sequence they can return to during project work, helping reflection become a practical habit rather than a final written task.</p>',
    tools:
      'Focus Areas: Learning Support &middot; Reflection Practice &middot; Job Aid &middot; Scaffolded Learning<br>Tools: Structured Prompts &middot; Applied Learning Resources',
    link: '',
    cta: ''
  }
};

const projectTakeover = document.querySelector('#project-takeover');
const projectTakeoverImage = document.querySelector('#project-takeover-image');
const projectTakeoverTitle = document.querySelector('#project-takeover-title');
const projectTakeoverSummary = document.querySelector('#project-takeover-summary');
const projectTakeoverTools = document.querySelector('#project-takeover-tools');
const projectTakeoverLink = document.querySelector('#project-takeover-link');
const projectTakeoverClose = document.querySelector('.project-takeover-close');
let lastProjectTrigger = null;

function openProjectTakeover(projectKey, trigger) {
  const project = projectPreviews[projectKey];

  if (!project || !projectTakeover) {
    return;
  }

  lastProjectTrigger = trigger;
  projectTakeoverTitle.textContent = project.title;
  projectTakeoverImage.src = project.image;
  projectTakeoverImage.alt = `${project.title} preview`;
  projectTakeoverSummary.innerHTML = project.summary;
  projectTakeoverTools.innerHTML = project.tools;

  if (project.link) {
    projectTakeoverLink.href = project.link;
    projectTakeoverLink.textContent = project.cta;
    projectTakeoverLink.hidden = false;
  } else {
    projectTakeoverLink.hidden = true;
  }

  projectTakeover.hidden = false;
  document.body.classList.add('project-takeover-open');
  projectTakeoverClose.focus();
}

function closeProjectTakeover() {
  if (!projectTakeover || projectTakeover.hidden) {
    return;
  }

  projectTakeover.hidden = true;
  document.body.classList.remove('project-takeover-open');

  if (lastProjectTrigger) {
    lastProjectTrigger.focus();
  }
}

document.querySelectorAll('[data-project-open]').forEach((button) => {
  button.addEventListener('click', () => {
    openProjectTakeover(button.dataset.projectOpen, button);
  });
});

if (projectTakeoverClose) {
  projectTakeoverClose.addEventListener('click', closeProjectTakeover);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeProjectTakeover();
  }
});

const projectsSection = document.querySelector('#projects');
const projectsScrollWrap = document.querySelector('.projects-scroll-wrap');
const projectScrollLeft = document.querySelector('.project-scroll-control-left');
const projectScrollRight = document.querySelector('.project-scroll-control-right');

if (projectsSection && projectsScrollWrap) {
  const projectScrollAmount = () => {
    return Math.min(projectsScrollWrap.clientWidth * 0.72, 720);
  };

  const updateProjectScrollControls = () => {
    const maxScroll = projectsScrollWrap.scrollWidth - projectsScrollWrap.clientWidth;
    const atStart = projectsScrollWrap.scrollLeft <= 2;
    const atEnd = projectsScrollWrap.scrollLeft >= maxScroll - 2;

    if (projectScrollLeft) {
      projectScrollLeft.disabled = atStart;
    }

    if (projectScrollRight) {
      projectScrollRight.disabled = atEnd || maxScroll <= 2;
    }
  };

  const scrollProjects = (direction) => {
    projectsScrollWrap.scrollBy({
      left: projectScrollAmount() * direction,
      behavior: 'smooth'
    });
  };

  const resetProjectScroll = () => {
    if (!projectTakeover || projectTakeover.hidden) {
      projectsScrollWrap.scrollTo({
        left: 0,
        behavior: 'auto'
      });
      updateProjectScrollControls();
    }
  };

  const resetProjectScrollSoon = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resetProjectScroll);
    });
  };

  const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        resetProjectScroll();
      }
    });
  }, {
    threshold: 0
  });

  projectsObserver.observe(projectsSection);
  projectsScrollWrap.addEventListener('scroll', updateProjectScrollControls);

  if (projectScrollLeft) {
    projectScrollLeft.addEventListener('click', () => scrollProjects(-1));
  }

  if (projectScrollRight) {
    projectScrollRight.addEventListener('click', () => scrollProjects(1));
  }

  window.addEventListener('load', resetProjectScrollSoon);
  window.addEventListener('pageshow', resetProjectScrollSoon);
  window.addEventListener('hashchange', resetProjectScrollSoon);
  window.addEventListener('resize', updateProjectScrollControls);
  updateProjectScrollControls();
}
