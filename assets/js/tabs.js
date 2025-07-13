
// Finds all buttons with the data-project attr
const buttons = document.querySelectorAll('[data-project]');
// data-project is like the name attr in a form input

// Finds all tags with project in the class
const projects = document.querySelectorAll('.project');

// When we press a button the data from the 
// data-project will be set as the target
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.project;
        
        // We compare the id attr for every project and if
        // the ids are similar, then 
        // the active will be put in its class
        projects.forEach(project => {
            // project.classList.toggle('active', project.id === target);
            project.hidden = (project.id === target) ? false : true;
        });

        buttons.forEach(btn => {
            // btn.classList.toggle('active', btn.dataset.project === target);
            (btn.dataset.project === target) ? btn.setAttribute("data-active", "") : btn.removeAttribute("data-active");
        });
    });
});
