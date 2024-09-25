function navigateTo(page) {
    const urls = {
        'home': 'http://127.0.0.1:5500/index.html',
        'about': 'http://127.0.0.1:5500/about.html',
        'portfolio': 'http://127.0.0.1:5500/portfolio.html',
        'services': 'http://127.0.0.1:5500/services.html',
        'contact': 'http://127.0.0.1:5500/contact.html',
        'blog': 'http://127.0.0.1:5500/blog.html',
        'hire': 'http://127.0.0.1:5500/hireme.html',
        'download_cv': 'http://127.0.0.1:5500/cv.pdf',
        'cv': 'https://example.com/cv.pdf',
        'linkedin': 'https://www.linkedin.com/in/yourprofile',
        'github': 'https://github.com/yourprofile',
        'instagram': 'https://www.instagram.com/yourprofile',
        'freecodecamp': 'https://www.freecodecamp.org/yourprofile',
        'user17job':'https://user17job.github.io/User17job.inc./',
    };

    window.location.href = urls[page], '_blank';
}




// if (urls[platform]) {
//     window.open(urls[platform], '_blank');
// } else {
//     console.error('URL not found for platform:', platform);
// }