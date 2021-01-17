import '../styles/main.scss';
import buildProjectCards from './components/projectsForm';

const toggleResumeVisibility = () => {
  document.getElementById('resume-veiwer-conatainer').style.display = 'flex';
};

const events = () => {
  document.getElementById('view-resume-button').addEventListener('click', toggleResumeVisibility);
};

const init = () => {
  events();
  buildProjectCards.buildProjectCards();
};

init();
