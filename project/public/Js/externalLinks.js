function navigateTo(page) {
  const urls = {
    // 'home': 'https://ramphystb.netlify.app/',
    about: "https://ramphystb-about.netlify.app/",
    portfolio: "https://ramphystb-portafolio.netlify.app/",
    services: "https://ramphystb-service.netlify.app/",
    contact: "https://ramphystb-contact.netlify.app/",
    blog: "https://user17job.systeme.io/unprogramayyo",
    hire: "https://ramphystb-contact.netlify.app/",

    download_cv: "https://github.com/user17job/user17job",
    cv: "https://github.com/user17job",

    linkedin: "https://www.linkedin.com/in/user17job",
    github: "https://github.com/user17job",
    instagram: "https://www.instagram.com//ramphys_/",
    freecodecamp: "https://www.freecodecamp.org/user17job",
    user17job: "https://user17job.github.io/User17job.inc./",

    llamar: "tel:+18295237077",
    email: "mailto:ramphys.g.c.p@gmail.com",
    whatsapp: "https://wa.link/wss1yb",

    project1: "http://127.0.0.1:5500/home/index.html",
    project2: "http://127.0.0.1:5500/project2/index.html",
    project3: "http://127.0.0.1:5500/project3/index.html",
    project4: "http://127.0.0.1:5500/project4/index.html",
  };

  if (urls[page]) {
    window.open(urls[page], "_blank");
  } else {
    console.error("URL not found for platform:", page);
  }
}
