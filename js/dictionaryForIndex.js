const dictionaryForIndex = [
    ["У нас Ви можете вивчити:"],

    ["Знаходження всіх країн;"],
    ["Столиці всіх країн;"],
    ["Міжнародні організації та країни, які до них відносяться"],

    ["продовжити!"],

    ["Географія"], // 1
    ["Історія"], // 2
    ["Економіка"], // 3
    ["Вищі навчальні заклади"], // 4

    ["Відкривши карту в цьому режимі, Ви вивчите:"],

    ["Карту світу"], // 1
    ["Столиці всіх країн"],
    ["Корисні копалини та промисловість"],
    ["Міжнародні організації"], 


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