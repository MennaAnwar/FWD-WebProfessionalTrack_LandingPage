const navMenu = document.querySelector('#navbar__list');
const navSections = document.querySelectorAll('section');


function Nav() {
    const fragment = document.createDocumentFragment();

    navSections.forEach((navSection) => {
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerText = navSection.getAttribute('data-nav');
        aTag.setAttribute('class', 'menu__link');

        // scroll to anchor ID using scroll to event
        aTag.addEventListener("mouseover", () => {
            navSection.scrollIntoView({behavior: "auto"});
            });
        liTag.appendChild(aTag);
        fragment.appendChild(liTag);
    });
    navMenu.appendChild(fragment);
};

function getVisibleSectionIndex() {
    let minor = window.innerHeight;
    visibleSectionIndex = 1;

    navSections.forEach((navSection, index) => {
        let offset = navSection.getBoundingClientRect();
        if(Math.abs(offset.top) < minor){
            minor = Math.abs(offset.top);
            visibleSectionIndex = index;
        }
    });
    return visibleSectionIndex;
}

// Build navigation menu
Nav();

// Set sections as active (highlight section and nav if section is in viewport)
document.addEventListener('select', setActiveSection);