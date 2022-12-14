const dictionaryForGeographyTest1 = [
    ["Тестування 'Країна - столиця'"],

    ["За допомогою цього тесту Ви зможете перевірити своє знання країн та столиць. Щоб розпочати тестування необхідно налаштувати тест та натиснути на кнопку “Розпочати тестування”"],

    ["Охоплююча територія:"],
    ["Перевірити знання:"],
    ["Кількість питань:"],
    ["Час для проходження (хв):"],

    ["Розпочати тестування"],


    ["Правильних відповідей: "],
    ["Завершити тестування"],


    ["Питання, на які Ви не відповіли будуть вважатися з неправильною відповіддю."],
    ["Ви бажаєте завершити тестування?"],

    ["Ні, продовжити"],
    ["Так, завершити"],


    ["Результати проходження тесту:"],

    ["Охоплююча територія:"],
    ["Кількість питань:"],
    ["Кількість правильних відповідей:"],
    ["Витрачено часу:"],

    ["Завершити тестування"],

    ["На обрану країну треба натискати двічі, щоб обрати її"]
]

const dictionaryForGeographyTest2 = [
    ["Тестування 'Країна - столиця'"],

    ["За допомогою цього тесту Ви зможете перевірити своє знання країн та адміністративних одиниць. Щоб розпочати тестування необхідно налаштувати тест та натиснути на кнопку “Розпочати тестування”"],

    ["Країна:"],
    ["Кількість питань:"],
    ["Час для проходження (хв):"],

    ["На обрану країну треба натискати двічі, щоб обрати її"],

    ["Розпочати тестування"],

    ["Результати проходження тесту:"],

    ["Охоплююча територія:"],
    ["Кількість питань:"],
    ["Кількість правильних відповідей:"],
    ["Витрачено часу:"],

    ["Завершити тестування"]
]

const dictionaryForTooltipOfGeographyTest1 = [
    ["Оберіть територію, країни з якої будуть траплятися у тесті."],
    ["При перевірці знань країн будуть даватися назви країн. При перевірці столиць - назви столиць."],
    ["Оберіть кількість запитань."],
    ["Скільки часу у хвилинах необхідно на проходження тесту."],
    ["Територія, з якої були країни."],
    ["Обрана кількість питань"],
    ["Кількість питань, на які Ви дали правильні відповіді"],
    ["Скільки часу було витрачено на проходження тесту (хвилини та секунди)"]
]

const dictionaryForTooltipOfGeographyTest2 = [
    ["Оберіть країну, адміністративні одиниці з якої будуть траплятися у тесті."],
    ["Оберіть кількість запитань."],
    ["Скільки часу у хвилинах необхідно на проходження тесту."],
    ["Країна, з якої були адміністративні одиниці."],
    ["Обрана кількість питань"],
    ["Кількість питань, на які Ви дали правильні відповіді"],
    ["Скільки часу було витрачено на проходження тесту (хвилини та секунди)"]
]

const dictionaryForContinents = [ 
    ["Всесвіт"],
    ["Європа"],
    ["Азія"],
    ["Африка"],
    ["Північна Америка"],
    ["Центральная Америка"],
    ["Південна Америка"],
]

const popupTestGeography1 = document.querySelector("#popupTestsInMap .popup-content[data-test='geography1']")
const popupTestGeography2 = document.querySelector("#popupTestsInMap .popup-content[data-test='geography2']")

popupTestGeography1.querySelector(".popup-header-title").innerText = dictionaryForGeographyTest1[0][languageId];

popupTestGeography1.querySelector(".popup-body[data-testStage='1'] .popup-body-title").innerText = dictionaryForGeographyTest1[1][languageId];

let dc = 2;
popupTestGeography1.querySelectorAll(".popup-body[data-testStage='1'] .popup-body-list-point-text").forEach((e) => {
    e.innerText = dictionaryForGeographyTest1[dc][languageId];
    dc++;
})

popupTestGeography1.querySelectorAll(".popup-body[data-testStage='1'] .popup-body-list-point-input[name='selectRegionOfTheWorld'] option").forEach((e, index) => {
    e.innerText = dictionaryForContinents[index][languageId]
})

popupTestGeography1.querySelector(".popup-body[data-testStage='1'] .popup-body-warning").innerText = dictionaryForGeographyTest1[19][languageId]

popupTestGeography1.querySelector(".popup-body[data-testStage='1'] .popup-body-button").innerText = dictionaryForGeographyTest1[6][languageId]

popupTestGeography1.querySelectorAll(".popup-body-list-point-text-info-icon").forEach((e, index) => {
    e.addEventListener("mouseenter", function () {
        //console.log(index)
        tool3.innerText = dictionaryForTooltipOfGeographyTest1[index][languageId]
    })
})

popupTestGeography2.querySelectorAll(".popup-body-list-point-text-info-icon").forEach((e, index) => {
    e.addEventListener("mouseenter", function () {
        //console.log(index)
        tool3.innerText = dictionaryForTooltipOfGeographyTest2[index][languageId]
    })
})

// popupTestGeography1.querySelector(".popup-body[data-testStage='2'] .popup-body-score-container .popup-body-score-text").innerText = dictionaryForGeographyTest1[7][languageId]

// popupTestGeography1.querySelector(".popup-body[data-testStage='2'] .popup-body-button").innerText = dictionaryForGeographyTest1[8][languageId]

// let dd = 9;
// popupTestGeography1.querySelectorAll(".popup-body[data-testStage='3'] .popup-body-question").forEach((e) => {
//     e.innerText = dictionaryForGeographyTest1[dd][languageId]
//     dd++;
// })

// let de = 11;
// popupTestGeography1.querySelectorAll(".popup-body[data-testStage='3'] .popup-body-button").forEach((e) => {
//     e.innerText = dictionaryForGeographyTest1[de][languageId]
//     de++;
// })

popupTestGeography1.querySelector(".popup-body[data-testStage='4'] .popup-body-title").innerText = dictionaryForGeographyTest1[13][languageId]

popupTestGeography2.querySelector(".popup-body[data-testStage='4'] .popup-body-title").innerText = dictionaryForGeographyTest2[7][languageId]

let df = 14;
popupTestGeography1.querySelectorAll(".popup-body[data-testStage='4'] .popup-body-list-point-text").forEach((e) => {
    e.innerText = dictionaryForGeographyTest1[df][languageId];
    df++;
})

let dg = 8;
popupTestGeography2.querySelectorAll(".popup-body[data-testStage='4'] .popup-body-list-point-text").forEach((e) => {
    e.innerText = dictionaryForGeographyTest2[dg][languageId];
    dg++;
})

popupTestGeography1.querySelector(".popup-body[data-testStage='4'] .popup-body-button").innerText = dictionaryForGeographyTest1[18][languageId]

popupTestGeography2.querySelector(".popup-body[data-testStage='4'] .popup-body-button").innerText = dictionaryForGeographyTest2[12][languageId]