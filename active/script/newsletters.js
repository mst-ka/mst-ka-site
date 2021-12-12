const Struct = (...keys) => ((...v) => keys.reduce((o, k, i) => {o[k] = v[i]; return o} , {}))
const Project = Struct('id', 'img', 'link', 'desc')
var newsletterList = [
  Project('Vol 3 - Fall 2021', 
          'img/newsletter_covers/f21_cover.jpeg',
          'https://issuu.com/beta-alpha-alumni-association/docs/fs21_vol3',
          `Fall 2021 Volume of the Beta Alpha Alumni Association Journal`),
  Project('Vol 2 - Spring 2021', 
          'img/newsletter_covers/s21_cover.jpeg',
          'https://issuu.com/beta-alpha-alumni-association/docs/sp21_vol2',
          `Spring 2021 Volume of the Beta Alpha Alumni Association Journal`),
  Project('Vol 1 - Fall 2020', 
          'img/newsletter_covers/fs20_cover.jpeg',
          'https://issuu.com/beta-alpha-alumni-association/docs/baaa_journal_vol_1',
          `Fall 2020 Volume of the Beta Alpha Alumni Association Journal`)
]

function loadNewsletters() {
  var template, text, a, i;
  // Get the template element:
  dst = document.getElementById("newsletterBar");
  img_width = (screen.width < 500 ? 400 : (screen.width / 4) - 40);

  for (i = 0; i < newsletterList.length; i++) {
    // Create a new node, based on the template:
    element = document.createElement('a');
    element.href = newsletterList[i].link;

    figure = document.createElement('figure');

    img = document.createElement('img');
    img.src = newsletterList[i].img;
    img.style.width = img_width + 'px';
    img.classList.add('newsletter-img');
    figure.appendChild(img);

    caption = document.createElement('figcaption');
    caption.textContent = newsletterList[i].id;

    figure.appendChild(caption);
    figure.classList.add('newsletter-card');

    if (newsletterList[i].desc) {
      description = document.createElement('p');
      description.classList.add('newsletter-text');
      description.textContent += '\n' + newsletterList[i].desc;     
      figure.appendChild(description);
    }

    element.appendChild(figure);
    dst.appendChild(element);
  }
}

new Promise(loadNewsletters);
