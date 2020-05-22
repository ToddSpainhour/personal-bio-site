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
          domString += `<img src="${project.screenshot}" class="card-img scale-up">`;
          domString += `<h6 class="text-center">${project.description}</h6>`;
          domString += `<p class="text-center">${project.technologiesUsed}</p>`;
          domString += '<div class="row project-card-links">';
          domString += `<h6 class="text-center"><a href="${project.url}" target="_blank">See the Site<i class="project-link-icons fas fa-external-link-square-alt"></i></a></h6>`;
          domString += `<h6 class="text-center"><a href="${project.githubUrl}" target="_blank">See the Code<i class="project-link-icons fas fa-code"></i></a></h6>`;
          domString += '</div>';
          domString += '</div>';
        }
        util.printToDom('printProjectsHere', domString);
      });
    });
};

export default { buildProjectCards };
