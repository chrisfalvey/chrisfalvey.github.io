function showProject(project) {

  const preview = document.getElementById('project-preview');

  const title = document.getElementById('preview-title');
  const image = document.getElementById('preview-image');
  const summary = document.getElementById('preview-summary');
  const tools = document.getElementById('preview-tools');
  const link = document.getElementById('preview-link');


  // PROJECT DATA

  const projects = {

    persuasion: {
      title: 'Persuasion: VCE VM Literacy Module',

      image: 'images/persuasion.jpg',

      summary:
        'Applied literacy unit exploring persuasive texts through real-world media, student inquiry, and differentiated learning pathways.',

      tools:
        'Tools: Google Classroom · SCORM · Applied Learning Frameworks',

      link:
        'projects/persuasion.html'
    },


    lms: {
      title: 'Using Google Forms & Sheets as an LMS',

      image: 'images/lms.jpg',

      summary:
        'Lightweight LMS structure using Google Forms and Sheets to visualise student progress and support formative assessment.',

      tools:
        'Tools: Google Forms · Google Sheets · Data Tracking',

      link:
        'projects/lms.html'
    },


    ai: {
      title: 'AI and the Future of Work',

      image: 'images/ai.jpg',

      summary:
        'Learning module exploring AI tools, ethical use, and future workplace implications through applied learning contexts.',

      tools:
        'Tools: AI Platforms · Research Tasks · Collaborative Inquiry',

      link:
        'projects/ai.html'
    }

  };


  // UPDATE CONTENT

  title.textContent = projects[project].title;

  image.src = projects[project].image;

  summary.textContent = projects[project].summary;

  tools.textContent = projects[project].tools;

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