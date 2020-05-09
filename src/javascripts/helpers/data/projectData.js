import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const myProjects = response.data;

      const projects = [];

      Object.keys(myProjects).forEach((project) => {
        myProjects[project].id = project;
        projects.push(myProjects[project]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
