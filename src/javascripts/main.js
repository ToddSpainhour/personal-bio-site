import '../styles/main.scss';
import buildProjectCards from './components/projectsForm';

const init = () => {
  buildProjectCards();
};

init();

// const projects = [
//   {
//     title: 'Project 1',
//     screenshot: 'https://thumbs.dreamstime.com/z/concept-design-training-construction-project-web-color-line-icons-collection-77263563.jpg',
//     description: 'This will be project 1',
//     technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
//     available: true,
//     url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//     githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//   },

//   {
//     title: 'Project 2',
//     screenshot: 'https://miro.medium.com/max/1000/1*eP_YjUdAauMdRSwWzlOl3A.png',
//     description: 'This will be project 2',
//     technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
//     available: true,
//     url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//     githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//   },

//   {
//     title: 'Project 3',
//     screenshot: 'https://cdn.nopio.com/wp-content/uploads/2016/05/28094946/web-development.jpg',
//     description: 'This will be project 3',
//     technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
//     available: true,
//     url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//     githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//   },
// ];

// const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = textToPrint;
// };

// const buildProjectCards = (arr) => {
//   let domString = '';
//     for (i = 0; i < arr.length; i++) {
//     if (projects[i].available === true) {
//       domString += '<div class="card-body col-lg-3 bg-white" >';
//       domString += `<h2 class="text-center">${arr[i].title}</h2>`;
//       domString += `<img src="${arr[i].screenshot}">`;
//       domString += `<p class="text-center">${arr[i].description}</p>`;
//       domString += `<p class="text-center">${arr[i].technologiesUsed}</p>`;
//       domString += `<p class="text-center">${'URL: '}${arr[i].url}</p>`;
//       domString += `<p class="text-center">${'Github: '}${arr[i].githubUrl}</p>`;
//       domString += '</div>';
//     }
//   }
//   printToDom('printProjectsHere', domString);
// };

// buildProjectCards(projects);
