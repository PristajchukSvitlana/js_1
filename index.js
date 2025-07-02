const textEl = document.querySelector('.text');
console.log(textEl);

const elemEl = document.querySelector('.elem')

console.log(elemEl);

const textElems = document.querySelectorAll('.text')
console.log(textElems);

//Чтобы найти любой html элемент на странице
//СОздаем переменную, (название класса + El)
//Присваиваем document.querySelector('.');
//И внутри кавычек пишем название класса



textEl.textContent = 'Hello word'// innerText





const textEls = document.querySelectorAll('.text');
console.log(textEls);
textEls.forEach(elem => {
    if (elem.textContent.length > 40) {
        elem.textContent = elem.textContent.slice(0, 40) + '...';
    }

    if (elem.textContent.length === 0) {
        elem.textContent = 'Описание отсутствует';
    }
});

//Найти несколько элементов



//Создать произвольную html разметку 
//Найти один элемент 
//Найти несколько эл

//Изменить текст внутри элемента
//Если текст больше 40 символов, то обрезать его до 40 символов
//Если текст пустой, то написать "Описание отсутствует" 
//Изменить цвет текста на синий
//Изменить цвет текста на красный
