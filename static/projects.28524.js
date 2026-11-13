/* 
Logic for H3 and H4 highlight in the left summary
*/

if ('IntersectionObserver' in window) {
    function set_summary_active(elem) {
        if (active_summary) {
            active_summary.classList.remove('active');
        }

        active_summary = elem;
        active_summary.classList.add('active');
    }
    let active_summary = null;
    const all_summary_h3_h4 = document.querySelectorAll('.summary-t3, .summary-t4');

    document.addEventListener('DOMContentLoaded', function () {
        const nav = document.querySelector('#left-sidebar nav');
        const current = nav?.querySelector('.summary-t1-current');
        if (nav && current) {
            // Scroll so the active item is visible inside the nav container
            current.scrollIntoView({
                block:    'start',   // or 'start' if you want it at the top
                inline:   'nearest',
                behavior: 'auto'   // use 'smooth' if you want animation
            });
        }

        const elems_by_id = {};

        // Observe if it leaves the viewport/intersection
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const link = elems_by_id[entry.target.id];
                    if (link) {
                        set_summary_active(link);
                    }
                }
            });
        }, { rootMargin: `0% 0% -80% 0%` });

        all_summary_h3_h4.forEach(elem => {
            // Clicking always activates the link
            elem.addEventListener('click', () => {
                set_summary_active(elem);
            });

            const href = elem.getAttribute('href');
            const id = href?.includes('#')
                ? href.slice(href.lastIndexOf('#') + 1)
                : null;
                // Find the last #, then remove the # and everything before it.

            if (id) {
                const elem_target = document.getElementById(id);

                if (elem_target) {
                    elems_by_id[id] = elem;
                    observer.observe(elem_target);
                    // console.log("[ok]", id, "found");
                } else {
                    console.log("[error]", id, "not found");
                }
            }
        });
    });
}
const sliders = document.querySelectorAll('#note-content .table');


// const note_content = document.querySelector('body');
// const note_content = document.getElementById('central-wrapper');
// const note_content = document.querySelector('main');
// const note_content = document.getElementById('note-wrapper');
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
