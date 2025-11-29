
// Reading Progress Indicator
document.addEventListener('DOMContentLoaded', function () {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    document.body.appendChild(progressBar);

    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    // Update progress bar
    function updateProgress() {
        const article = document.querySelector('main > article') || document.querySelector('#note-content');
        if (!article) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = scrollPercent + '%';

        // Show/hide back to top button
        if (scrollTop > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Back to top functionality
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Update on scroll
    window.addEventListener('scroll', updateProgress);
    updateProgress();
});

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

                        // Scroll TOC item into view if needed
                        const tocContainer = document.getElementById('right-sidebar');
                        if (tocContainer && activeLink.offsetParent) {
                            const linkRect = activeLink.getBoundingClientRect();
                            const containerRect = tocContainer.getBoundingClientRect();

                            if (linkRect.bottom > containerRect.bottom || linkRect.top < containerRect.top) {
                                activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }
                    }
                }
            });
        }, { rootMargin: `0% 0% -80% 0%` });

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

            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href')?.slice(1);
                if (targetId) {
                    const target = document.getElementById(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Update URL without jumping
                        history.pushState(null, null, '#' + targetId);
                    }
                }

                const body = document.body;
                if (body.classList.contains('model-open')) {
                    const mainAsideCloseButton = document.querySelector('.main-aside-close-button');
                    if (mainAsideCloseButton) {
                        mainAsideCloseButton.click();
                    }
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
