/*Создать файл src/tale.js
Задание 1:

В файле tale.js cоздать функцию kolobok.
Функция kolobok принимает на вход имя персонажа, возвращает, что сделал колобок после встречи с персонажем.
Список персонажей: дедушка; заяц; лиса.
Пример работы функции:
kolobok('дедушка') // Я от дедушки ушёл
kolobok('лиса') // Меня съели
*/

function kolobok(persons) {
    switch (persons) {
        case 'дедушка': 
            console.log ('Я от дедушки ушёл');
            break;
        case 'заяц': 
            console.log('Не ешь меня, я тебе песенку спою');
            break;
        case 'лиса': 
            console.log('Меня съели');
            break;
        default:
            console.log('Нет таких персонажей');
    }
}

let persons = 'дедушка';
kolobok(persons);