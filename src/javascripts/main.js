import '../styles/main.scss';
import buildProjectCards from './components/projectsForm';

// const toggleResumeVisibility = () => {
//   document.getElementById('resume-veiwer-conatainer').style.display = 'flex';
// };

const toggleResumeVisibility = () => {
  const resumeDiv = document.getElementById('resume-veiwer-conatainer');
  if (resumeDiv.style.display === 'none') {
    resumeDiv.style.display = 'flex';
  } else {
    resumeDiv.style.display = 'none';
  }
};

const events = () => {
  document.getElementById('view-resume-button').addEventListener('click', toggleResumeVisibility);
};

const init = () => {
  events();
  buildProjectCards.buildProjectCards();
};

init();
