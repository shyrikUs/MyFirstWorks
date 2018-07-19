'use strict';
window.onload = function () {
    let btn = document.getElementsByClassName('smallImg__item'), // Находим пустые блоки
        addGallery = document.getElementById('addGallery'),  // Находим кнопку для добавления/удаления галереи
        bigImg = document.getElementById('bigImg'), // Находим пустой див для вставки увеличиной копии изображения
        smallImg__img = document.getElementsByClassName('smallImg__img'); // Переменная для будующих миниатюр
    addGallery.addEventListener('click', function () {
        if (this.innerText === 'Добавить галерею') {
            this.innerText = 'Удалить галерею';
            for (let i = 0; i < btn.length; i++) {
                let smallPic = document.createElement('img'); // Проходим по масиву кнопок и добавляем в них теги IMG
                smallPic.className = 'smallImg__img'; // Даем картикам название классов
                let src = [smallPic]; // Обьявляем новую переменную, которая содержит в себе масив картинок
                for (let j = 0; j < src.length; j++) { // Проходим по масиву и в пустые дивы добавляем пустые теги IMG
                    btn[i].appendChild(src[j]);
                }
            }
            let xhr = new XMLHttpRequest(); // создаем запрос для добавления путей на миниатюры
            xhr.open('GET', './img.json', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) {
                    return
                }
                if (xhr.status !== 200) {
                    console.log(src.status, src.statusText);
                } else {
                    let myImg = JSON.parse(xhr.responseText); // Парсим путь к миниатюрам
                    for (let k = 0; k < smallImg__img.length; k++) {
                        smallImg__img[k].src = myImg[k].small; // пробегаем по масиву пустых картинок и присваиваем им SRC
                        smallImg__img[k].onclick = function () { //Реализируем нажатие на миниатюру и её дубляж в большой ДИВ
                                    bigImg.innerHTML = ''; //Очищаем большой ДИВ перед загрузкой следующей картинки
                                    let imgInput = document.createElement('img'); // Создаем пустую картинку
                                    imgInput.src = myImg[k].big; // Присваиваем пустгой картинки SRC в зависимости от миниатюры
                                    bigImg.appendChild(imgInput);
                                }
                            }
                        }
                    };
            xhr.send();
        } else if (this.innerText === 'Удалить галерею') {
            this.innerText = 'Добавить галерею';
            for (let i = 0; i < btn.length; i++) {
                btn[i].innerHTML = '';
            }
            bigImg.innerHTML = '';
        }
    });
};