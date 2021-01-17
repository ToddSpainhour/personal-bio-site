import '../styles/main.scss';
import buildProjectCards from './components/projectsForm';

const toggleResumeVisibility = () => {
  const resumeDiv = document.getElementById('resume-veiwer-conatainer');
  const viewResumeBtn = document.getElementById('view-resume-button');
  if (resumeDiv.style.display === 'none') {
    viewResumeBtn.innerHTML = 'Hide Resume';
    viewResumeBtn.style.backgroundColor = '#91333C';
    viewResumeBtn.style.color = '#C3C5cc';
    resumeDiv.style.display = 'flex';
  } else {
    viewResumeBtn.innerHTML = 'View Resume';
    viewResumeBtn.style.backgroundColor = '#34718C';
    viewResumeBtn.style.color = '#26282B';
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
