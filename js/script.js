function showProject(project) {

  const preview = document.getElementById('project-preview');

  const title = document.getElementById('preview-title');
  const image = document.getElementById('preview-image');
  const summary = document.getElementById('preview-summary');
  const tools = document.getElementById('preview-tools');
  const link = document.getElementById('preview-link');
  const cta = document.getElementById('preview-link');


  // PROJECT DATA

  const projects = {

    persuasion: {
      title: 'Persuasion: VCE VM Literacy Module',

      image: 'images/persuasion.jpg',

      summary:
        '<p>Designed as a targeted response to identified learner and institutional needs within the VCE Vocational Major Literacy program, this scaffolded module explored persuasive language, communication techniques, and media analysis through an applied learning framework.</p><p>The resource was developed for hybrid delivery using Google Classroom and incorporated differentiated learning pathways, extension opportunities, and structured scaffolding to support diverse learner readiness levels.</p><p>Instructional decisions were informed by Cognitive Load Theory principles implemented as part of a whole-school teaching and learning initiative, with deliberate sequencing across connected modules focused on audience, media formats, persuasion, and later voice and advocacy.</p>',

      tools:
        'Focus Areas: Hybrid Learning · Applied Learning · Cognitive Load Theory · Differentiation<br />Tools: Google Classroom · Google Workspace · Multimedia Learning Resources',

      link:
        'projects/persuasion.html',

      cta:
        'View Learning Design Case Study'
    },


    lms: {
      title: 'Using Google Workspace as a Lightweight LMS',

      image: 'images/lms.jpg',

      summary:
        '<p>Designed as a practical response to limitations within existing departmental LMS workflows, this project explored the use of Google Workspace tools — including Slides, Forms, and Sheets — to support hybrid delivery, automated assessment, and learner progress tracking.</p><p>The system was developed to integrate with familiar staff workflows and widely adopted tools, reducing implementation friction while improving moderation visibility, student data tracking, and consistency of delivery across applied learning contexts.</p><p>A key focus of the design was reducing repetitive teacher workload through automated marking and streamlined feedback processes, while maintaining flexibility for differentiated instruction and blended learning environments.</p><p>The showcased module, developed for Work Related Skills, introduced concepts surrounding the Professional Digital Portfolio and demonstrated how lightweight systems can support scalable and accessible learning experiences without reliance on SCORM-based infrastructure.</p>',

      tools:
        'Focus Areas: Hybrid Delivery · Automated Assessment · Workflow Design · Data Tracking<br />Tools: Google Slides · Google Forms · Google Sheets · Google Classroom',

      link:
        'projects/lms.html',

      cta:
        'Explore This Workflow Design'
    },


    ai: {
      title: 'AI and the Future of Work',

      image: 'images/ai.jpg',

      summary:
        '<p>Developed as a cross-curricular pilot unit spanning Literacy and Work Related Skills, this project explored the historical and emerging impact of technology and artificial intelligence on visible work, employment, and communication.</p><p>Students were guided through structured observation, reflection, and investigation tasks designed to encourage critical thinking around technological disruption, workplace transformation, and future career pathways.</p><p>Alongside curriculum outcomes, the unit also functioned as a mobile-first delivery pilot investigating whether multimedia-rich learning experiences completed primarily through student smartphones could improve engagement, task completion, and learner participation within applied learning contexts.</p><p>The project incorporated multimedia response formats, scaffolded inquiry activities, and blended instructional approaches to support accessibility, flexibility, and contemporary digital literacy development.</p>',

      tools:
        'Focus Areas: Mobile Learning · Multimedia Learning · Inquiry Design · Learner Engagement<br />Tools: Google Classroom · Mobile Learning Activities · Multimedia Response Tasks',

      link:
        'projects/ai.html',

      cta:
        'Explore This Pilot Project'
    }

  };


  // UPDATE CONTENT

  title.textContent = projects[project].title;

  image.src = projects[project].image;

  // summary.textContent = projects[project].summary;
  summary.innerHTML = projects[project].summary;

  // tools.textContent = projects[project].tools;
  tools.innerHTML = projects[project].tools;
  
  cta.textContent = projects[project].cta;

  link.href = projects[project].link;


  // SHOW PANEL

  preview.classList.remove('d-none');


  // SCROLL INTO VIEW

  preview.scrollIntoView({
    behavior: 'smooth'
  });

}

function closePreview() {

  const preview = document.getElementById('project-preview');

  preview.classList.add('d-none');

  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  });

}