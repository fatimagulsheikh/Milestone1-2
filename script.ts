var toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
var skills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});