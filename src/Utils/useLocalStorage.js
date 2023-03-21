// данный код является шпаргалкой взятой из сайта https://webcademy.ru/blog/949/
// он нужен для того: чтобы когда мы ставим темную тему на странице и открываем ее на новом окне, чтобы она (темная тема) сохранилась и при открытии нового окна также использовалась, то есть сразу была в темной теме.
import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) { // определяем свою фунцию которая при запуске принимает в себя аргументы: ключь (key) по которому мы должны достать значения из localStorage-a и defaultValue, то есть если в localStorage-е не будет значения по указанному ключу (key) то эта функция вернет дефолтное значение.
	// getting stored value
	const saved = localStorage.getItem(key); // мы обращаемся в localStorage по указанному ключу и получаем значение 
	const initial = JSON.parse(saved); // далее мы это значение парсим из json строки 
	return initial || defaultValue; // если мы его (значение) получаем  (то есть это не андефайнт) то мы его возвращаем, либо если он андефайнд то тогда мы возращаем дефолтное значение которое должно быть по умолчанию
}

export const useLocalStorage = (key, defaultValue) => { // наш хук useLocalStorage куда мы передаем ключ по которому мы храним значения localStorage-e и дефолтное значение
	const [value, setValue] = useState(() => { // далее заводим состояние [value, setValue] с помощью useState, в useState мы передаем стартовое значение, в качестве стартового значение мы передаем функцию. 
		return getStorageValue(key, defaultValue); // Данная функция запускает getStorageValue и по итогу когда он getStorageValue отработает он либо вернет значение из localStorage-a если оно там есть либо вернет дефолтное значение
	});

	useEffect(() => { //useEffect сработает при старте и при изменении данных [key, value] значений 
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue]; // и возращает value и setValue (функцию для изменения этого состояния)
};
