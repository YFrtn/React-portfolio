// для того чтобы: если в системных настройках уже включен дарк моуд, то он при открытии сайта сразу укажет темную тему или если лайт моуд то покажет на сайте лайт моуд
const detectDarkMode = () => {
    if (
        window.matchMedia && 
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
        return 'dark'
    }
    return 'light'
}

export default detectDarkMode; 