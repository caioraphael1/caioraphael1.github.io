

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
