"use strict";


const text = {
    text1:
        'Привет, друг! ' +
        'Меня зовут Капи. ' +
        'У меня тут беда... ' +
        'Завтра собеседование на стажировку в отдел айти на должность веб-разработчика по JavaScript, ' +
        'а я все забыл! ' +
        'Мне нужна твоя помощь. ' +
        'Срочно нужно повторить все!',

    text2:
        'Ох, ну я хотя бы помню про консоль разработчика. Не все потеряно! Знаешь что это? ' +
        'Код уязвим для ошибок. И мы, скорее всего, будем делать ошибки в коде… ' +
        'Впрочем, давайте будем откровенны: мы точно будем совершать ошибки в коде. ' +
        'В конце концов, мы люди, а не роботы. Хотя, я в душе настоящий человек! '
    ,

    text3:
        'По умолчанию в интерфейсах ошибки не видны. То есть, если что-то пойдёт не так, мы не увидим, что именно сломалось, и не сможем это починить. Для решения задач такого рода встроены так называемые «Инструменты разработки».'

}

let page = 0;
const click_text = document.querySelector('.bg-capi-container');
const adding_text = document.querySelector('#mainstream-text');
let interval = 0;

function typing(text_name) {
    clearTimeout(interval);

    let count = 0; // счетчик позиции букв
    let result = ''; // получаемый текст на выходе
    typeLine();

    function typeLine() {
        interval = setTimeout(
            () => {
                result += text[text_name][count];
                adding_text.innerText = result + '|';

                count++;
                if (count >= text[text_name].length) {
                    clearTimeout(interval);
                    adding_text.innerHTML = result;
                    return true;
                }
                typeLine();
            }, 50)
    }
}

click_text.onclick = function () {
    page++;
    console.log(page);
    switch (page) {
        case 1:
            typing('text1');
            break;
        case 2:
            typing('text2');
            break;
        case 3:
            typing('text3');
            break;
        default:
            adding_text.innerHTML = "UNKNOWN PAGE OR PAGES IS OVER!";
            clearTimeout(interval);
            break;
    }
}
