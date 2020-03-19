import util from '../helpers/util';
import projectInfo from '../helpers/data/projectData';


const buildProjectCards = () => {
  let domString = '';
  const projects = projectInfo.getProjects();
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="card-body col-lg-3 bg-white" >';
      domString += `<h2 class="text-center">${project.title}</h2>`;
      domString += `<img src="${project.screenshot}">`;
      domString += `<p class="text-center">${project.description}</p>`;
      domString += `<p class="text-center">${project.technologiesUsed}</p>`;
      domString += `<p class="text-center">${'URL: '}${project.url}</p>`;
      domString += `<p class="text-center">${'Github: '}${project.githubUrl}</p>`;
      domString += '</div>';
    }
    util.printToDom('printProjectsHere', domString);
  });
};


export default { buildProjectCards };
