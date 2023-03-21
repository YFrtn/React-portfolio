// ОСТАНОВИЛСЯ НА 2:47

import { useEffect } from 'react';
import { useLocalStorage } from '../../Utils/useLocalStorage';
import Sun from './Sun.svg';
import Moon from './Moon.svg';
import './style.css'
import detectDarkMode from '../../Utils/detectDarkMode';

const BtnDarkMode = () => {
    
    // const [darkMode, setDarkMode]= useState('light'); // UseState мы использовали для назначения состояния darkMode и изменение его через setDarkMode, также вместо него использовали свой кастомный хук useLocalStorage, по этому закоментировали данный код. Даже можем удалить useState из импорта. 

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode()); // наш кастамный хук. Первым аргументом передали ключ по которому это значение будет храниться в localStorage-e ('darkMode') и (изначально light сейчас другой передали detectDarkMode) вторым аргументом передали тему по умолчанию ('light') и возращает массив из двух элементом [darkMode, setDarkMode]. в useLocalStorage мы писали что передаем массив из двух элементов [value, setValue], тут мы его диструктурировали на [darkMode, setDarkMode]. darkMode переменная, setDarkMode функция
    // detectDarkMode чтобы отталкивался от системных настроек компьютера если дарк то дарк сразу на сайте если лайт то на сайте сразу лайт

    useEffect(() => { // UseEffect необходимым для запуска определенный функции. То есть функция запускается при первичном состоянии (darkMode), так и при изменения состояния через useEffect. UseEffect принимает в себя два аргумента это: функция и массив (массив может быть пустым а также можно в него передать как элементы массива те состояния на которые useEfect будет завязан (darkMode как мы указали в примере. И когда darkMode будет меняться будет запускаться useEffect))
        
        if(darkMode === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        };
    }, [darkMode]);


    useEffect(() => {
        // Если меняется системные настройки меняем тему (то есть когда тема меняется по времени суток, ночью включается дарк моуд)
        window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener('change', (event) => {
            const newColorScheme = event.matches ? "dark" : "light";
            setDarkMode(newColorScheme);
        })
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        // время 2:18 где-то
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    const btnNormal = "dark-mode-btn";
    const btnActive = "dark-mode-btn dark-mode-btn--active"

    return ( 
         // добавили ref от useRef чтобы определить чтобы он взаимодействовал с ним
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}> 
            <img src={Sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={Moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>

     );
}
 
export default BtnDarkMode;