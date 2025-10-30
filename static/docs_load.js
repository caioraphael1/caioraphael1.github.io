(function(){
    function log(...args) { console.log('[scroll-restore]', ...args); }
    function warn(...args){ console.warn('[scroll-restore] [WARN] ', ...args); }
    function err(...args) { console.error('[scroll-restore] [ERROR] ', ...args); }

    const pageKey = 'page-scroll:global';
    const asideKey = 'aside-scroll:global';

    // mark restoring so other scripts can detect and defer behavior if needed
    document.documentElement.classList.add('js-scroll-restore');
    log('start head-restore', { time: Date.now(), path: location.pathname });

    // immediate page restore
    try {
        const raw = sessionStorage.getItem(pageKey);
        if (raw !== null) {
        const pos = Math.max(0, parseInt(raw,10)||0);
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, pos);
        html.style.scrollBehavior = prev;
        log('head: restored page scroll', pos);
        } else {
        log('head: no page key found');
        }
    } catch (e) {
        err('head: page restore failed', e && e.stack ? e.stack : e);
    }

    // try restore aside now. If not present, will attempt again on load.
    function tryRestoreAside(){
        try {
        const nav = document.querySelector('#left-sidebar > nav');
        if (!nav) {
            log('head: aside not present yet');
            return false;
        }
        const raw = sessionStorage.getItem(asideKey);
        if (raw === null) {
            log('head: no aside key found');
            return true;
        }
        const pos = Math.max(0, parseInt(raw,10)||0);
        const prev = nav.style.scrollBehavior;
        nav.style.scrollBehavior = 'auto';
        nav.scrollTop = pos;
        nav.style.scrollBehavior = prev;
        log('head: restored aside scroll', pos, { clientH: nav.clientHeight, scrollH: nav.scrollHeight });
        return true;
        } catch (e) {
        err('head: aside restore failed', e && e.stack ? e.stack : e);
        return false;
        }
    }

    try {
        // attempt early aside restore
        tryRestoreAside();
    } catch (e) {
        err('head: tryRestoreAside top-level error', e && e.stack ? e.stack : e);
    }

    // final restore and reveal on window.load (handles late layout, fonts, images)
    window.addEventListener('load', function onLoad(){
        try {
        const t0 = Date.now();
        log('load: final restore start', { time: t0 });

        // final page restore
        try {
            const raw = sessionStorage.getItem(pageKey);
            if (raw !== null) {
            const pos = Math.max(0, parseInt(raw,10)||0);
            if (document.scrollingElement) document.scrollingElement.scrollTop = pos;
            window.scrollTo(0, pos);
            log('load: page restored', pos);
            } else log('load: no page key');
        } catch (e) { err('load: page restore error', e && e.stack ? e.stack : e); }

        // final aside restore
        try {
            tryRestoreAside();
        } catch (e) { err('load: aside restore error', e && e.stack ? e.stack : e); }

        } finally {
        // reveal now that final restore attempted
        document.documentElement.classList.remove('js-scroll-restore');
        log('load: reveal; duration ms', Date.now());
        }
    }, { once: true });


    // RESTORE
    function restore() {
        try {
        const v = sessionStorage.getItem(GLOBAL_ASIDE_KEY);
        if (v === null) return;
        const pos = parseInt(v, 10) || 0;
        asideNav.scrollTop = pos;
        setTimeout(()=> { asideNav.scrollTop = pos; }, 40);
        } catch(e){}
    }
    document.addEventListener('DOMContentLoaded', restore);
    window.addEventListener('load', restore);

})();
