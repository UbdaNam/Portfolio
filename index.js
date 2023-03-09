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
    name: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techStacks: ['html', 'css', 'javaScript'],
    FeaturedMobileImage: 'images/Portoflio Card/Snapshoot Portfolio.png',
    liveVersionLink: '#',
    sourceLink: '#',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
  },
  {
    name: 'Multi-Post Stories',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    Description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    techStacks: ['html', 'Ruby on rails', 'css', 'javaScript'],
    FeaturedMobileImage: 'images/Portoflio Card/Snapshoot Portfolio_2.png',
    liveVersionLink: '#',
    sourceLink: '#',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
  },
  {
    name: 'Facebook 360',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    Description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    techStacks: ['html', 'Ruby on rails', 'css', 'javaScript'],
    FeaturedMobileImage: 'images/Portoflio Card/Snapshoot Portfolio_3.png',
    liveVersionLink: '#',
    sourceLink: '#',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'github', 'next'],
  },
  {
    name: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    Description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    techStacks: ['html', 'Ruby on rails', 'css', 'javaScript'],
    FeaturedMobileImage: 'images/Portoflio Card/Snapshoot Portfolio_4.png',
    liveVersionLink: '#',
    sourceLink: '#',
    fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    fullTechStacks: ['html', 'css', 'javaScript', 'github', 'react', 'Tailwind'],
  },
];

let ProjectContainer = document.querySelector('.works_container')

let cards = ProjecData.map((project, index) => {
  return `<div class="card">
    <img src="images/Snapshoot Portfolio.png" alt="Portfolio image 1">
      <img class="desktop_image" src="${project.FeaturedMobileImage}" alt="Portfolio image 1">
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
          ${project.techStacks.map((language) => {
            return `<li>${language}</li>`
          }).join('\n')}
          </ul>
          <div class="action">
            <button class="btn">
              See Project
            </button>
          </div>
        </div>
      </div>`}).join('\n');

ProjectContainer.innerHTML = cards