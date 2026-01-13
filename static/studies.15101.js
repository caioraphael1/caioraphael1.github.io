
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
