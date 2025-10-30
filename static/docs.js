

const get_color_preference = () => {
    const lastUsedColorPreference = localStorage.getItem('color-preference')
    if (lastUsedColorPreference !== null)
        return lastUsedColorPreference
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
const set_color_preference = () => {
    localStorage.setItem('color-preference', color_preference)
    document.firstElementChild.setAttribute('data-color', color_preference)
}


/* Load */
let color_preference = get_color_preference()
localStorage.setItem('color-preference', color_preference)
document.firstElementChild.setAttribute('data-color', color_preference)

/* Update via click */
const button_color_theme = document.querySelector('#button-color-theme')
if (button_color_theme) {
    button_color_theme.addEventListener('click', function () {
        if (color_preference == 'dark') {
            color_preference = 'light'
        } else {
            color_preference = 'dark'
        }
        set_color_preference()
    });
}

/* On change via matchMedia? */
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({matches: isDark}) => {
        color_preference = isDark ? 'dark' : 'light'
        set_color_preference()
    })

const body           = document.body;
const bodyModelOuter = document.querySelector('#body-model-outer')

const aside_left_sidebar            = document.querySelector('#left-sidebar')
const asideWrapperOpenButton  = document.querySelector('main > article > nav > button:first-child')
const aside_left_sidebar_close_btn = document.querySelector('#left-sidebar > div .btn')
if (aside_left_sidebar && asideWrapperOpenButton) {
    asideWrapperOpenButton.addEventListener('click', function () {
        body.classList.add('model-open')
        bodyModelOuter.style.display = 'block'
        aside_left_sidebar.classList.add('open')

    });
    aside_left_sidebar_close_btn.addEventListener('click', function () {
        body.classList.remove('model-open')
        bodyModelOuter.style.display = 'none'
        aside_left_sidebar.classList.remove('open')
    });

    bodyModelOuter.addEventListener('click', function () {
        body.classList.remove('model-open')
        bodyModelOuter.style.display = 'none'
        aside_left_sidebar.classList.remove('open')
    });
}

const mainAside = document.querySelector('main > aside')
const mainAsideOpenButton = document.querySelector('main > article > nav > button:last-child')
const mainAsideCloseButton = document.querySelector('main > aside > div > .btn')
if (mainAside && mainAsideOpenButton) {
    mainAsideOpenButton.addEventListener('click', function () {
        body.classList.add('model-open')
        bodyModelOuter.style.display = 'block'
        mainAside.classList.add('open')

    });
    mainAsideCloseButton.addEventListener('click', function () {
        body.classList.remove('model-open')
        bodyModelOuter.style.display = 'none'
        mainAside.classList.remove('open')
    });

    bodyModelOuter.addEventListener('click', function () {
        body.classList.remove('model-open')
        bodyModelOuter.style.display = 'none'
        mainAside.classList.remove('open')
    });
}


/* 
If the window is resized while a sidebar/modal is open:
Close all open sidebars and the overlay.
This prevents layout glitches on responsive breakpoints.
*/
window.addEventListener('resize', function (_event) {
    if (body.classList.contains('model-open')) {
        body.classList.remove('model-open')
        bodyModelOuter.style.display = 'none'

        if (mainAside.classList.contains('open')) {
            mainAside.classList.remove('open')
        }

        if (aside_left_sidebar.classList.contains('open')) {
            aside_left_sidebar.classList.remove('open')
        }
    }
});


/* 
Dynamically sets the height of the sidebar <nav>:
For screens wider than 1280px, it fills the remaining vertical space below the logo.
For smaller screens, the height is reset to default.
Re-applies on window resize for responsiveness.
*/
const aside_left_sidebar_logo = document.querySelector('#left-sidebar .site-logo');
const aside_left_sidebar_nav = document.querySelector('#left-sidebar > nav');
const adjustAsideWrapperAsideNavHeight = function () {
    if (window.innerWidth > 1280) {
        aside_left_sidebar_nav.style.height = `${window.innerHeight - 1 - aside_left_sidebar_logo.getBoundingClientRect().height}px`
    } else {
        aside_left_sidebar_nav.style.height = ''
    }
};
adjustAsideWrapperAsideNavHeight()
window.addEventListener('resize', function (_event) {
    adjustAsideWrapperAsideNavHeight();
});


// Save scroll position to be restored by the html snippet, on page load.
// add near other saver code in your external bundle
// Replace previous aside persistence with a global key (persists across pages)
(function(){
    const asideNav = document.querySelector('#left-sidebar > nav');
    if (!asideNav) return;

    // SAVE
    const GLOBAL_ASIDE_KEY = 'aside-scroll:global';
    let raf = null;
    function save() {
        try { sessionStorage.setItem(GLOBAL_ASIDE_KEY, String(asideNav.scrollTop || 0)); } catch(e){}
    }
    asideNav.addEventListener('scroll', function(){
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function(){ save(); raf = null; });
    }, { passive: true });

    window.addEventListener('beforeunload', save);


    // expose for debugging
    window.__scrollPersist = window.__scrollPersist || {};
    window.__scrollPersist.asideKey = GLOBAL_ASIDE_KEY;
})();

if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('#table-of-contents a');
        let activeLink = null;
        const linksById = {};

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (activeLink) {
                        activeLink.classList.remove('active');
                    }

                    activeLink = linksById[entry.target.id];
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {rootMargin: `0% 0% -80% 0%`});

        links.forEach(link => {
            const id = link.getAttribute('href') ? link.getAttribute('href').slice(1) : null; 
                // Checking if href exists before slicing the #.
            if (id) {
                const target = document.getElementById(id);
                if (target) {
                    linksById[id] = link;
                    observer.observe(target);
                }
            }

            link.addEventListener('click', function () {
                if (body.classList.contains('model-open')) {
                    mainAsideCloseButton.click()
                }
            });
        });
    });
}
const sliders = document.querySelectorAll('#note-content .table');


// const note_content = document.querySelector('body');
// const note_content = document.getElementById('central-wrapper');
// const note_content = document.querySelector('main');
// const note_content = document.getElementById('note-article');
// const note_content = document.getElementById('note-content');

sliders.forEach(slider => {
    let isDown = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.userSelect = 'none';
        slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.userSelect = 'auto';
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.userSelect = 'auto';
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        slider.scrollLeft -= e.movementX;


        // note_content.scrollTop -= e.movementY;
            /* This doesn't work */

        // window.scrollBy(0, -e.movementY * 10);
            /* This works, but the scroll is not satisfying. It's slow. */
    });
});
