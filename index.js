function openPopUp() {
  document.querySelector('.popup-nav').classList.add('popup-nav-visible');
}

function closePopUp() {
  document.querySelector('.popup-nav').classList.replace('popup-nav-visible', 'popup-nav');
}

document.querySelector('.menu_icon').addEventListener('click', openPopUp);
document.querySelector('.cancel-button').addEventListener('click', closePopUp);
document.querySelector('.popup-menu .menu-item').addEventListener('click', closePopUp);
document.querySelector('.popup-menu .menu-item2').addEventListener('click', closePopUp);
document.querySelector('.popup-menu .menu-item3').addEventListener('click', closePopUp);
document.querySelector('.popup-nav').addEventListener('click', closePopUp);
document.querySelector('.popup-nav');

// Project Cards

const ProjecData = [
  {
    id: 1,
    name: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techStacks: ['html', 'css', 'javaScript'],
    FeaturedDesktopImage: 'images/Portoflio Card/Snapshoot Portfolio.png',
    FeaturedMobileImage: 'images/Snapshoot Portfolio.png',
    liveVersionLink: 'https://ubdanam.github.io/Portfolio/',
    sourceLink: 'https://github.com/UbdaNam/Portfolio/tree/Add-project-details',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    Description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    techStacks: ['html', 'Ruby', 'css', 'javaScript'],
    FeaturedDesktopImage: 'images/Portoflio Card/Snapshoot Portfolio_2.png',
    FeaturedMobileImage: 'images/Snapshoot Portfolio 2.png',
    liveVersionLink: 'https://ubdanam.github.io/Portfolio/',
    sourceLink: 'https://github.com/UbdaNam/Portfolio/tree/Add-project-details',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
  },
  {
    id: 3,
    name: 'Facebook 360',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    Description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    techStacks: ['html', 'Ruby', 'css', 'javaScript'],
    FeaturedDesktopImage: 'images/Portoflio Card/Snapshoot Portfolio_3.png',
    FeaturedMobileImage: 'images/Snapshoot Portfolio 3.png',
    liveVersionLink: 'https://ubdanam.github.io/Portfolio/',
    sourceLink: 'https://github.com/UbdaNam/Portfolio/tree/Add-project-details',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'ruby', 'next'],
  },
  {
    id: 4,
    name: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    Description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    techStacks: ['html', 'Ruby', 'css', 'javaScript'],
    FeaturedDesktopImage: 'images/Portoflio Card/Snapshoot Portfolio_4.png',
    FeaturedMobileImage: 'images/Snapshoot Portfolio 4.png',
    liveVersionLink: 'https://ubdanam.github.io/Portfolio/',
    sourceLink: 'https://github.com/UbdaNam/Portfolio/tree/Add-project-details',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'ruby', 'react', 'Tailwind'],
  },
];

const projectContainer = document.querySelector('.works_container');

const cards = ProjecData.map((project) => `<div class="card">
      <img src="${project.FeaturedMobileImage}" alt="Portfolio image ${project.id}">
      <img class="desktop_image" src="${project.FeaturedDesktopImage}" alt="Portfolio image 1">
        <div class="work_desc">
          <h2>${project.name}</h2>
          <div class="heading_3">
            <h3 class="main_h3">${project.company}</h3>
            <span></span>
            <h3>${project.role}</h3>
            <span></span>
            <h3>${project.year}</h3>
          </div>
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          <ul>
          ${project.techStacks.map((language) => `<li>${language}</li>`).join('\n')}
          </ul>
          <div class="action">
            <button id='btn${project.id}' class="btn">
              See Project
            </button>
          </div>
        </div>
      </div>
      <div id='popup-card' class="popup-card${project.id}">
      <div class="popup-work_desc">
        <div class="details-header">
          <h2>${project.name}</h2>
          <button class="popup-cancel-icon${project.id}">
            <img src="images/icons/cancelIconBlack.svg" alt="Cancel icon">
          </button>
        </div>
        <div class="heading_3">
        <h3 class="main_h3">${project.company}</h3>
        <span></span>
        <h3>${project.role}</h3>
        <span></span>
        <h3>${project.year}</h3>
      </div>
        <img class="popup-desktop_image" src="${project.FeaturedDesktopImage}" alt="Portfolio image 1">
        <div class="popup-description">
          <p>${project.fullDescription}</p>
          <div class="popup-stack-links">
          <ul>
          ${project.fullTechStacks.map((language) => `<li>${language}</li>`).join('\n')}
          </ul>
            <div class="popup-action">
            <button class="btn">
              <a class="flex" href="${project.liveVersionLink}">
                See live
                <img src="images/icons/liveIcon.svg" alt="live icon">
              </a>
            </button>
            <button class="btn">
              <a class="flex" href="${project.sourceLink}">
                See Source
                <img src="images/icons/buttonIconGitHub.svg" alt="Github icon">
              </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>`).join('\n');

projectContainer.innerHTML = cards;

function openDetails1() {
  document.querySelector('.popup-card1').classList.add('popup-cardvisible');
}

function openDetails2() {
  document.querySelector('.popup-card2').classList.add('popup-cardvisible');
}

function openDetails3() {
  document.querySelector('.popup-card3').classList.add('popup-cardvisible');
}

function openDetails4() {
  document.querySelector('.popup-card4').classList.add('popup-cardvisible');
}

function closeDetail1() {
  document.querySelector('.popup-card1').classList.remove('popup-cardvisible');
}

function closeDetail2() {
  document.querySelector('.popup-card2').classList.remove('popup-cardvisible');
}

function closeDetail3() {
  document.querySelector('.popup-card3').classList.remove('popup-cardvisible');
}

function closeDetail4() {
  document.querySelector('.popup-card4').classList.remove('popup-cardvisible');
}
document.getElementById('btn1').addEventListener('click', openDetails1);
document.getElementById('btn2').addEventListener('click', openDetails2);
document.getElementById('btn3').addEventListener('click', openDetails3);
document.getElementById('btn4').addEventListener('click', openDetails4);
document.querySelector('.popup-cancel-icon1').addEventListener('click', closeDetail1);
document.querySelector('.popup-cancel-icon2').addEventListener('click', closeDetail2);
document.querySelector('.popup-cancel-icon3').addEventListener('click', closeDetail3);
document.querySelector('.popup-cancel-icon4').addEventListener('click', closeDetail4);

//form

const formControl = document.getElementById('form')
const userEmail = document.getElementById('user_email')

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  validateForm();
})

const validateForm = () => {
  if(/^[a-z\s]+$/.test(userEmail)){
    document.getElementById('error').classList.add('error')
  }
}