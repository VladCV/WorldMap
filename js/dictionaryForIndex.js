const dictionaryForIndex = [
    ["У нас Ви можете:"],

    ["Вивчити географію країн за допомогою карти;"],
    ["Дізнатися щось нове про економіку будь-яких країн;"],
    ["Вибрати найбільш підходящий вищий навчальний заклад;"],
    ["Знайти чудове місце для відпочинку."],

    ["продовжити!"],

    ["Географія"], // 1
    ["Історія"], // 2
    ["Економіка"], // 3
    ["Вищі навчальні заклади"], // 4

    ["Відкривши карту в цьому режимі, Ви вивчите:"],

    ["Карту світу"], // 1
    ["Водойми, гори, вулкани"],
    ["Корисні копалини та промисловість"],
    ["Загальну географічну характеристику кожної країни"],


    ["Всесвітню історію"], // 2
    ["Міжнародні організації та спільноти"],
    ["Детальну інформацію про Світові війни"],
    ["Загальну історичну характеристику кожної країни"],

    ["", ""], // 3
    ["", ""],
    ["", ""],
    ["", ""],

    ["", ""], // 4
    ["", ""],
    ["", ""],
    ["", ""],

    ["Перейти"],
]

document.querySelector('.main-facilities-main-text').innerText = dictionaryForIndex[0][languageId]

let aa = 1;
document.querySelectorAll('.main-facilities-list-point').forEach((e) => {
    e.innerText = dictionaryForIndex[aa][languageId]
    aa++;
})

document.querySelector('.continue-container .continue-text').innerText = dictionaryForIndex[5][languageId];

let ab = 6;
let ac = 11;
document.querySelectorAll('.slide-content').forEach((e) => {
    e.querySelector('.slide-title .title-text').innerText = dictionaryForIndex[ab][languageId];
    e.querySelector('.slide-button').dataset.mode = dictionaryForIndex[ab][languageId]
    ab++;

    e.querySelector('.slide-main-text .main-text-title').innerText = dictionaryForIndex[10][languageId];

    e.querySelectorAll('.main-text-point').forEach((li) => {
        li.innerText = dictionaryForIndex[ac][languageId];
        ac++;
    })

    e.querySelector('.slide-button').innerText = dictionaryForIndex[27][languageId];
})