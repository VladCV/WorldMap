const dictionaryForIndex = [
    ["У нас Ви можете вивчити:", "You can learn from us:"],

    ["Знаходження всіх країн;", "Finding all countries;"],
    ["Столиці всіх країн;", "Capitals of all countries;"],
    ["Міжнародні організації та країни, які до них відносяться", "International organizations and countries belonging to them"],

    ["продовжити!", "continue!"],

    ["Географія", "Geography"], // 1
    ["Історія", "History"], // 2
    ["Економіка", "Economy"], // 3
    ["Вищі навчальні заклади", "Universities"], // 4

    ["Відкривши карту в цьому режимі, Ви вивчите:", "By opening the map in this mode, you will learn:"],

    ["Карту світу", "World map"], // 1
    ["Столиці всіх країн", "Capitals of all countries"],
    ["Корисні копалини та промисловість", "Minerals and industry"],
    ["Міжнародні організації", "International organizations"], 


    ["Всесвітню історію", "World history"], // 2
    ["Міжнародні організації та спільноти", "International organizations and communities"],
    ["Детальну інформацію про Світові війни", "Detailed information about World Wars"],
    ["Загальну історичну характеристику кожної країни", "General historical characteristics of each country"],

    ["", ""], // 3
    ["", ""],
    ["", ""],
    ["", ""],

    ["", ""], // 4
    ["", ""],
    ["", ""],
    ["", ""],

    ["Перейти", "Go to"],
]

document.querySelector('.main-facilities-main-text').innerText = dictionaryForIndex[0][languageId]

let aa = 1;
document.querySelectorAll('.main-facilities-list-point').forEach((e) => {
    e.innerText = dictionaryForIndex[aa][languageId]
    aa++;
})

document.querySelector('.continue-container .continue-text').innerText = dictionaryForIndex[4][languageId];

let ab = 5;
let ac = 10;
document.querySelectorAll('.slide-content').forEach((e) => {
    e.querySelector('.slide-title .title-text').innerText = dictionaryForIndex[ab][languageId];
    e.querySelector('.slide-button').dataset.mode = dictionaryForIndex[ab][languageId]
    ab++;

    e.querySelector('.slide-main-text .main-text-title').innerText = dictionaryForIndex[9][languageId];

    e.querySelectorAll('.main-text-point').forEach((li) => {
        li.innerText = dictionaryForIndex[ac][languageId];
        ac++;
    })

    e.querySelector('.slide-button').innerText = dictionaryForIndex[26][languageId];
})