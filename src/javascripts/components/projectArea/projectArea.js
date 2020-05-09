import projectData from '../../helpers/data/projectData';
// import projectCardBuilder from '../projectsForm';

import utils from '../../helpers/util';


const buildProjects = () => {
  projectData.getProjects()
    .then(() => {
      let domString = '';
      domString += '<h2>will this display?</h2>';
      utils.printToDom('printProjectsHere', domString);
    })
    .catch((err) => console.error('whoops. build projects broke', err));
};

export default { buildProjects };
