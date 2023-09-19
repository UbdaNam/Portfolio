function openPopUp() {
  document.querySelector('.popup-nav').classList.add('popup-nav-visible');
}

function closePopUp() {
  document
    .querySelector('.popup-nav')
    .classList.replace('popup-nav-visible', 'popup-nav');
}

document.querySelector('.menu_icon').addEventListener('click', openPopUp);
document.querySelector('.cancel-button').addEventListener('click', closePopUp);
document
  .querySelector('.popup-menu .menu-item')
  .addEventListener('click', closePopUp);
document
  .querySelector('.popup-menu .menu-item2')
  .addEventListener('click', closePopUp);
document
  .querySelector('.popup-menu .menu-item3')
  .addEventListener('click', closePopUp);
document.querySelector('.popup-nav').addEventListener('click', closePopUp);
document.querySelector('.popup-nav');

// Project Cards

const ProjecData = [
  {
    id: 1,
    name: 'Fundraising platform',
    company: 'Self-Employed',
    role: 'Front End',
    year: '2023',
    Description:
      'This project is a landing page for we-care fundraising platform.',
    techStacks: ['HTML', 'CSS', 'JavaScript'],
    FeaturedDesktopImage: 'images/Projects_Snapshot/FP preview.png',
    FeaturedMobileImage: 'images/Projects_Snapshot/FP preview.png',
    liveVersionLink: 'https://ubdanam.github.io/Fundraising-platform/',
    sourceLink: 'https://github.com/UbdaNam/Fundraising-platform',
    fullDescription:
      'This project is a web page that serves as an entry point to the We-Care fundraising platform. The platform is designed to enable individuals to raise funds for causes that are important to them. The landing page is built using HTML, CSS, and JavaScript, which are the standard technologies used in web development. These technologies were used to create an engaging and responsive user interface that allows users to easily navigate the platform and start their fundraising campaigns.',
    fullTechStacks: ['HTML', 'CSS', 'JavaScript', 'Github'],
  },
  {
    id: 2,
    name: 'TV Show',
    company: 'Self-Emplyed',
    role: 'Front End',
    year: '2023',
    Description:
      'This is a web application that displays a list of TV shows with real-time data fetched from the server, including the number of likes for each show.',
    techStacks: ['HTML', 'CSS', 'JavaScript'],
    FeaturedDesktopImage: 'images/Projects_Snapshot/TS preview.png',
    FeaturedMobileImage: 'images/Projects_Snapshot/TS preview.png',
    liveVersionLink: 'https://ubdanam.github.io/TV-Show/',
    sourceLink: 'https://github.com/UbdaNam/TV-Show',
    fullDescription:
      'The web application is designed to provide users with a seamless experience in browsing and discovering TV shows. The app displays a comprehensive list of TV shows that are fetched from the server in real-time, ensuring that the data is always up-to-date. For each TV show, the app also displays the number of likes it has received, allowing users to see which shows are most popular. <br><br> Moreover, the app includes a details page for each TV show, where users can view more information about the show, such as the plot, cast, and ratings. Additionally, users can add comments to the details page to share their thoughts and opinions about the show with other users. This feature promotes engagement and interaction among users, allowing them to discuss their favorite TV shows and discover new ones.',
    fullTechStacks: [
      'HTML',
      'CSS',
      'JavaScript',
      'Webpack',
      'REST',
      'Github',
      'Jest',
    ],
  },
  {
    id: 3,
    name: 'Space Travelers Hub',
    company: 'Self-Employed',
    role: 'Front End and QA',
    year: '2023',
    Description:
      'A web application that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    techStacks: ['JavaScript', 'React', 'Redux'],
    FeaturedDesktopImage: 'images/Projects_Snapshot/SP preview.png',
    FeaturedMobileImage: 'images/Projects_Snapshot/SP preview.png',
    liveVersionLink: 'https://space-travelers-hub-rw29.onrender.com/',
    sourceLink: 'https://github.com/dev89s/space-travelers-hub',
    fullDescription:
      'The web application is designed to provide commercial and scientific space travel services to customers. Users can browse available rockets and missions, view pricing and schedules, and make bookings online through a user-friendly interface. The services may include suborbital flights, orbital flights, trips to the International Space Station (ISS), research missions, satellite launches, or experiments conducted in space.',
    fullTechStacks: ['JavaScript', 'React', 'Redux', 'REST', 'Github'],
  },
  {
    id: 4,
    name: 'Africa COVID-19 Tracker',
    company: 'Self-Employed',
    role: 'Front End',
    year: '2023',
    Description:
      'This project aims to provide up-to-date information about the COVID-19 pandemic in Africa, with a focus on tracking the number of confirmed cases, deaths, and recoveries by country.',
    techStacks: ['React', 'Redux', 'Redux-Toolkit'],
    FeaturedDesktopImage: 'images/Projects_Snapshot/ACT preview 4.png',
    FeaturedMobileImage: 'images/Projects_Snapshot/ACT preview 4.png',
    liveVersionLink: 'https://africa-covid-19-tracker.onrender.com/',
    sourceLink: 'https://github.com/UbdaNam/africa-covid-19-tracker',
    fullDescription:
      "This project is designed to provide the latest information about the ongoing COVID-19 pandemic in Africa. Its primary objective is to track and report the number of confirmed cases, deaths, and recoveries on a country-by-country basis. The data used in this project is sourced from reliable public sources, ensuring that the information provided is accurate and trustworthy. By providing up-to-date information on the pandemic's impact in Africa, this project aims to help individuals, organizations, and governments make informed decisions about how to respond to the crisis.",
    fullTechStacks: [
      'JavaScript',
      'React',
      'Redux',
      'Redux-Toolkit',
      'Render',
      'Jest',
      'React-Testing-Library',
    ],
  },
  {
    id: 5,
    name: 'Cash Wise',
    company: 'Self-Employed',
    role: 'Full Stack',
    year: '2023',
    Description:
      'Cash Wise is a budget management tool that allows users to track their spending across different categories.',
    techStacks: ['Ruby', 'Ruby on Rails', 'Postgres'],
    FeaturedDesktopImage: 'images/Projects_Snapshot/CW preview.png',
    FeaturedMobileImage: 'images/Projects_Snapshot/CW preview.png',
    liveVersionLink: 'https://cash-wise.onrender.com',
    sourceLink: 'https://github.com/UbdaNam/CashWise',
    fullDescription:
      "With Cash Wise, users can easily see where their money is going and make informed decisions about their spending. The app provides a list of transactions for each category the user created, making it easy for users to see how much they have spent and on what. Whether you're looking to save money or just want to keep better track of your finances, Cash Wise is the perfect tool for managing your budget.",
    fullTechStacks: [
      'Ruby',
      'Rails',
      'Postgres',
      'Render',
      'Rspec',
      'CapyBara',
    ],
  },
];

const projectContainer = document.querySelector('.works_container');

const cards = ProjecData.map(
  (project) => `<div class="card">
  <div class="img-container">
      <img loading="lazy" src="${
  project.FeaturedMobileImage
}" alt="Portfolio image ${project.id}">
      <img loading="lazy" class="desktop_image" src="${
  project.FeaturedDesktopImage
}" alt="Portfolio image 1">
      </div>
        <div class="work_desc">
          <h2>${project.name}</h2>
          <div class="heading_3">
            <h3 class="main_h3">${project.company}</h3>
            <span></span>
            <h3>${project.role}</h3>
            <span></span>
            <h3>${project.year}</h3>
          </div>
          <p>${project.Description}</p>
          <ul>
          ${project.techStacks
    .map((language) => `<li>${language}</li>`)
    .join('\n')}
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
            <img loading="lazy" src="images/icons/cancelIconBlack.svg" alt="Cancel icon">
          </button>
        </div>
        <div class="heading_3">
        <h3 class="main_h3">${project.company}</h3>
        <span></span>
        <h3>${project.role}</h3>
        <span></span>
        <h3>${project.year}</h3>
      </div>
        <img loading="lazy" class="popup-desktop_image" src="${
  project.FeaturedDesktopImage
}" alt="Portfolio image 1">
        <div class="popup-description">
          <p>${project.fullDescription}</p>
          <div class="popup-stack-links">
          <ul>
          ${project.fullTechStacks
    .map((language) => `<li>${language}</li>`)
    .join('\n')}
          </ul>
            <div class="popup-action">
            <button class="btn">
              <a class="flex" href="${project.liveVersionLink}" target="_blank"
              rel="noopener noreferrer">
                See live
                <img loading="lazy" src="images/icons/liveIcon.svg" alt="live icon">
              </a>
            </button>
            <button class="btn">
              <a class="flex" href="${project.sourceLink}" target="_blank"
              rel="noopener noreferrer">
                See Source
                <img loading="lazy" src="images/icons/buttonIconGitHub.svg" alt="Github icon">
              </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>`,
).join('\n');

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

function openDetails5() {
  document.querySelector('.popup-card5').classList.add('popup-cardvisible');
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

function closeDetail5() {
  document.querySelector('.popup-card5').classList.remove('popup-cardvisible');
}

document.getElementById('btn1').addEventListener('click', openDetails1);
document.getElementById('btn2').addEventListener('click', openDetails2);
document.getElementById('btn3').addEventListener('click', openDetails3);
document.getElementById('btn4').addEventListener('click', openDetails4);
document.getElementById('btn5').addEventListener('click', openDetails5);
document
  .querySelector('.popup-cancel-icon1')
  .addEventListener('click', closeDetail1);
document
  .querySelector('.popup-cancel-icon2')
  .addEventListener('click', closeDetail2);
document
  .querySelector('.popup-cancel-icon3')
  .addEventListener('click', closeDetail3);
document
  .querySelector('.popup-cancel-icon4')
  .addEventListener('click', closeDetail4);
document
  .querySelector('.popup-cancel-icon5')
  .addEventListener('click', closeDetail5);

// form

const formControl = document.getElementById('form');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const userMessage = document.getElementById('message');
const errorElement = document.getElementById('error');

const validateForm = () => {
  const emailVal = userEmail.value.trim();
  if (/^[a-z0-9]+@[a-z-0-9]+\.[a-z0-9-.]+$/.test(emailVal)) {
    errorElement.classList.remove('error');
    errorElement.classList.add('success');
    errorElement.innerHTML = 'Success';
    formControl.submit();
  } else {
    errorElement.classList.remove('success');
    errorElement.classList.add('error');
    errorElement.innerHTML = 'email should be in lowercase';
  }
};

formControl.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

// Local Storage (cache)

const formData = {
  userName: userName.value,
  userEmail: userEmail.value,
  userMessage: userMessage.value,
};

function setFormData() {
  const data = localStorage.getItem('formData');
  const deSerializedData = JSON.parse(data);

  userName.value = deSerializedData.userName;
  userEmail.value = deSerializedData.userEmail;
  userMessage.value = deSerializedData.userMessage;
}

function saveFormData() {
  formData.userName = userName.value;
  formData.userEmail = userEmail.value;
  formData.userMessage = userMessage.value;

  const serializedData = JSON.stringify(formData);
  localStorage.setItem('formData', serializedData);

  setFormData();
}

userName.onchange = saveFormData;
userEmail.onchange = saveFormData;
userMessage.onchange = saveFormData;

if (!localStorage.length > 0) {
  saveFormData();
} else {
  setFormData();
}
