import util from '../helpers/util';
import projectData from '../helpers/data/projectData';


const buildProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        if (project.available === true) {
          domString += '<div class="card-body col-lg-3 m-1 mb-5" >';
          domString += `<h2 class="text-center">${project.title}</h2>`;
          domString += `<img src="${project.screenshot}" class="card-img">`;
          domString += `<p class="text-center">${project.description}</p>`;
          domString += `<p class="text-center">${project.technologiesUsed}</p>`;
          domString += `<p class="text-center"><a href="${project.url}">See the Site</a></p>`;
          domString += `<p class="text-center"><a href="${project.githubUrl}">See the Code</a></p>`;
          domString += '</div>';
        }
        util.printToDom('printProjectsHere', domString);
      });
    });
};

export default { buildProjectCards };
