//toggle icon navbar


// scroll section

Let sections = document.querySelectorAll('section');
Let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {

    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);    
}