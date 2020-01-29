console.log("If you can read this, your JavaScript file is connected.")

const projects = [
    {
        title: "Great Project", 
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3TLuZFKusXmzYj1n2XpNp4OU4k4gb60OPofAltjxheWC8-CcXPw&s", 
        description: "This is the greatest project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
        title: "Cool Project", 
        screenshot: "https://img.favpng.com/22/11/0/responsive-web-design-web-development-computer-icons-icon-design-png-favpng-nDHYbePFnXDSXgv0jm6QdSJgC.jpg", 
        description: "This is the coolest project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
        title: "Wonderful Project", 
        screenshot: "https://img.favpng.com/21/25/3/computer-icons-stopwatch-chronometer-watch-icon-design-png-favpng-HbeXKpp7rnhmQvaGVBWNkSXdd.jpg", 
        description: "This is the most wonderful project", // A good project description includes 'the what', 'the why', and 'the how'.
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

const buildProjectCards = () => {
    let domString = "";
    for(i = 0; i < projects.length; i++) {
    domString += `<div class="individualProjectCards">`;
    domString += `<h3 class="projectTitle">${projects[i].title}</h3>`;
    domString += `<img src=${projects[i].screenshot} class="projectSCreenshot>`;
    domString += `<p class="technologiesUsed">${projects[i].technologiesUsed}</p>`
    domString =+ `</div>`;
    }
printToDom("printProjectsHere", domString);
}

console.log(buildProjectCards())



/*
Create an array and save it to a projects variable; this array should hold a bunch of objects that will represent projects you complete throughout this course that you will want to include in your portfolio.
Each object in the array should have the following properties (you will use dummy data for now):

Create two functions:
printToDom: This function should accept 2 arguments: the ID of the element to print it in and a string to print.
createProjectCards: This function should loop through the projects array and build up a 'dom string' (a complex HTML structure represented by a string) that includes all the information on the project. It should call the printToDom function for each project (hint: For this one, you'll be printing to the div with the ID projectsPage).
Only print 'available' projects. In your createProjectCards function, add logic to only show the project on the page if it has a value of true in the available property.
Call the createProjectCards(); function in an init function that runs when the project loads.
*/