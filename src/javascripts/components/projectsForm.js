import util from '../helpers/util';
import projectInfo from '../helpers/data/projectData';


const buildProjectCards = () => {
  let domString = '';
  const projects = projectInfo.getProjects();
  // projects.getProjects().forEach((project) => {
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="card-body col-lg-3 bg-white" >';
      domString += `<h2 class="text-center">${projectInfo.getProjects.title}</h2>`;
      domString += `<img src="${projectInfo.getProjects.screenshot}">`;
      domString += `<p class="text-center">${projectInfo.getProjects.description}</p>`;
      domString += `<p class="text-center">${projectInfo.getProjects.technologiesUsed}</p>`;
      domString += `<p class="text-center">${'URL: '}${projectInfo.getProjects.url}</p>`;
      domString += `<p class="text-center">${'Github: '}${projectInfo.getProjects.githubUrl}</p>`;
      domString += '</div>';
    }
    util.printToDom('printProjectsHere', domString);
  });
};

// buildProjectCards();


export default { buildProjectCards };
