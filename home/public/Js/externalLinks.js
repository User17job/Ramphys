function navigateTo(page) {
    const urls = {
        'home': 'https://ramphystb.netlify.app/',
        'about': 'https://ramphystb-about.netlify.app/',
        'portfolio': 'https://ramphystb-portafolio.netlify.app/',
        'services': 'https://ramphystb-service.netlify.app/',
        'contact': 'https://ramphystb-contact.netlify.app/',
        'blog': 'https://user17job.systeme.io/unprogramayyo',
        'hire': 'https://ramphystb-contact.netlify.app/',

        'download_cv': 'https://github.com/user17job/user17job',
        'cv': 'https://github.com/user17job',

        'linkedin': 'https://www.linkedin.com/in/user17job',
        'github': 'https://github.com/user17job',
        'instagram': 'https://www.instagram.com//ramphys_/',
        'freecodecamp': 'https://www.freecodecamp.org/user17job',
        'user17job':'https://user17job.github.io/User17job.inc./',
    };

    window.location.href = urls[page], '_blank';
}




// if (urls[platform]) {
//     window.open(urls[platform], '_blank');
// } else {
//     console.error('URL not found for platform:', platform);
// }