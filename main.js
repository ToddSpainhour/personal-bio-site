
const projects = [
    {
        title: "Great Project", 
        screenshot: "https://images.squarespace-cdn.com/content/v1/50b88908e4b012760ada1011/1491898940561-V4HUKHP518IQWSZQTTQO/ke17ZwdGBToddI8pDm48kPpAUHgePZ6DjVP_od6QqdRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx003ftK54AGUBJTS7GpzyME5fZXl5dhCxku1Jd0idtO00BVIvIqn75PEXxKdOxIj0/image-asset.jpeg", 
        description: "This is the greatest project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
        title: "Cool Project", 
        screenshot: "https://images.squarespace-cdn.com/content/v1/50b88908e4b012760ada1011/1491898940561-V4HUKHP518IQWSZQTTQO/ke17ZwdGBToddI8pDm48kPpAUHgePZ6DjVP_od6QqdRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx003ftK54AGUBJTS7GpzyME5fZXl5dhCxku1Jd0idtO00BVIvIqn75PEXxKdOxIj0/image-asset.jpeg", 
        description: "This is the coolest project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
        title: "Wonderful Project", 
        screenshot: "https://images.squarespace-cdn.com/content/v1/50b88908e4b012760ada1011/1491898940561-V4HUKHP518IQWSZQTTQO/ke17ZwdGBToddI8pDm48kPpAUHgePZ6DjVP_od6QqdRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx003ftK54AGUBJTS7GpzyME5fZXl5dhCxku1Jd0idtO00BVIvIqn75PEXxKdOxIj0/image-asset.jpeg", 
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

const buildProjectCards = (arr) => {
    let domString = '';
for (i = 0; i < arr.length; i++){
    if(projects[i].available === true) {
    
    domString +=        '<div class="card-body col-lg-4" >'
    domString +=            `<h2>${arr[i].title}</h2>`
    domString +=                `<img src="${arr[i].screenshot}">`
    domString +=                    `<p>${arr[i].description}</p>`
    domString +=                        `<p>${arr[i].technologiesUsed}</p>`
    domString +=                            `<p>${"URL: "}${arr[i].url}</p>`
    domString +=                                `<p>${"Github: "}${arr[i].githubUrl}</p>`
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