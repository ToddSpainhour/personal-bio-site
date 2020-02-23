
const projects = [
    {
        title: "Project 1", 
        screenshot: "https://thumbs.dreamstime.com/z/concept-design-training-construction-project-web-color-line-icons-collection-77263563.jpg", 
        description: "This will be project 1", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
        title: "Project 2", 
        screenshot: "https://miro.medium.com/max/1000/1*eP_YjUdAauMdRSwWzlOl3A.png", 
        description: "This will be project 2", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
        title: "Project 3", 
        screenshot: "https://cdn.nopio.com/wp-content/uploads/2016/05/28094946/web-development.jpg", 
        description: "This will be project 3", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildProjectCards = (arr) => {
    let domString = '';
for (i = 0; i < arr.length; i++){
    if(projects[i].available === true) {
    
    domString +=        '<div class="card-body col-lg-3 bg-white" >'
    domString +=            `<h2 class="text-center">${arr[i].title}</h2>`
    domString +=                `<img src="${arr[i].screenshot}">`
    domString +=                    `<p class="text-center">${arr[i].description}</p>`
    domString +=                        `<p class="text-center">${arr[i].technologiesUsed}</p>`
    domString +=                            `<p class="text-center">${"URL: "}${arr[i].url}</p>`
    domString +=                                `<p class="text-center">${"Github: "}${arr[i].githubUrl}</p>`
    domString +=                                    '</div>'
} 
}
printToDom('printProjectsHere', domString)
}

buildProjectCards(projects)



/*
Create an array and save it to a projects variable; this array should hold a bunch of objects that will represent projects you complete throughout this course that you will want to include in your portfolio.
Each object in the array should have the following properties (you will use dummy data for now):

Create two functions:
printToDom: This function should accept 2 arguments: the ID of the element to print it in and a string to print.
createProjectCards: This function should loop through the projects array and build up a 'dom string' (a complex HTML structure represented by a string) 
that includes all the information on the project. It should call the printToDom function for each project (hint: For this one, you'll be printing to the div with the ID projectsPage).
Only print 'available' projects. In your createProjectCards function, add logic to only show the project on the page if it has a value of true in the available property.
Call the createProjectCards(); function in an init function that runs when the project loads.
*/