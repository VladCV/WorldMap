const dictionaryForMap = [
    [""]
]

const dictionaryForTooltips1 = [
    ["Країна: "],
    ["Столиця: "]
]

const dictionaryForTooltips2 = [
    ["Налаштування"],
    ["Тестування"]
]

const dictionaryForLeftMenu1 = [
    ["Налаштування"],

    ["Загальне"],
    ["Для кожної країни"],

    ["Показувати назву країни під час наведення курсором"],
    ["Показувати назву столиці під час наведення курсором"],
    ["Виділити країни, які входять до складу <div class='dropdown' id='dropdown'> <span class='dropdown-title' data-internationalorganization='1'>НАТО</span> <div class='dropdown-content'></div></div>"]
]

const dictionaryForLeftMenu2 = [
    ["Тестування"],

    ["Якщо Ви бажаєте зберігати інформацію про проходження тестів, то Вам необхідно авторизуватися"],
    ["Усі Ваші спроби проходження тестів будуть збережені і Ви в будь-який час зможете їх передивитися"],

    ["Авторизуватися"],
    ["Подивитися результати"],

    ["1. Тестування “Країна - столиця”"],
    ["2. Тестування “Країна - адміністративні одиниці”"],
    ["3. Тестування “Міжнародна організація - країни-учасниці”"],

    ["Перейти"]
]

const left1 = document.querySelector("#leftMenu[data-mode='settings']");
const left2 = document.querySelector("#leftMenu2[data-mode='tests']");
const tool1 = document.getElementById("tooltip1");
const tool2 = document.getElementById("tooltip2");

tool1.getElementsByClassName("country-before")[0].innerText = dictionaryForTooltips1[0][languageId]
tool1.getElementsByClassName("capital-before")[0].innerText = dictionaryForTooltips1[1][languageId]

tool2.querySelectorAll(".tooltip-geography-mode").forEach((e, index) => {
    e.innerText = dictionaryForTooltips2[index][languageId];
})

left1.getElementsByClassName("left-menu-title")[0].innerText = dictionaryForLeftMenu1[0][languageId]
left2.getElementsByClassName("left-menu-title")[0].innerText = dictionaryForLeftMenu2[0][languageId]

let ba = 1;
left1.querySelectorAll(".left-menu-mode").forEach((e) => {
    e.innerText = dictionaryForLeftMenu1[ba][languageId]
    ba++;
})

let bb = 3;
left1.querySelectorAll(".left-menu-list[data-mode='general'] .left-menu-list--point").forEach((e) => {
    e.innerHTML = dictionaryForLeftMenu1[bb][languageId]
    bb++;
})

let bc = 1;
left2.querySelectorAll(".left-menu-authorization-text").forEach((e) => {
    e.innerText = dictionaryForLeftMenu2[bc][languageId]
    bc++;
})

let bd = 3;
left2.querySelectorAll(".left-menu-authorization-button").forEach((e) => {
    e.innerText = dictionaryForLeftMenu2[bd][languageId]
    bd++;
})

let be = 5
left2.querySelectorAll(".left-menu-test-title").forEach(e => {
    e.innerText = dictionaryForLeftMenu2[be][languageId]
    be++;
})

left2.querySelectorAll(".left-menu-test-button").forEach(e => {
    e.innerText = dictionaryForLeftMenu2[8][languageId]
})
