const navmenu = document.querySelector('#navbaritem');
const navSections = document.querySelectorAll('section');


function Nav() {
    const FRAGMENT = document.createDocumentFragment();

    navSections.forEach((navSection) => {
        const li = document.createElement('li');
        const  a= document.createElement('a');
        a.innerText = navSection.getAttribute('data-nav');
        a.setAttribute('class', 'menu__link');

        // scroll to anchor ID using scroll to event
        a.addEventListener("mouseover", () => {
            navSection.scrollIntoView({behavior: "auto"});
            });
        li.append(a);
        FRAGMENT.append(li);
    });
    navmenu.append(FRAGMENT);
};


// Build navigation menu
Nav();