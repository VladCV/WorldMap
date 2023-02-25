const dictionaryForFirstVersion = [
  ["Особистий кабінет", "Personal cabinet"],
  ["Змінити фото", "Change photo"],
  ["Налаштування", "Settings"],
  ["Тести, які Ви пройшли:", "The tests you passed:"],
  ["Поки що Ви не пройшли жодного тесту.", "You have not passed any test yet."],
  ["Але Ви можете зробити це зараз.", "But you can do it now."],
  ["Перейти до тестів", "Go to tests"],
];

const dictionaryForChangeImage = [
  ["Змінити фото", "Change photo"],
  ["Уведіть URL-адресу: ", "Enter the URL:"],
  ["Завантажити фото", "Upload a photo"],
];

const dictionaryForSortOfTests = [
  ["Всі тести", "All tests"],
  ["Призначені тести", "Assigned tests"],
  ["Пройдені тести", "Passed tests"],
  ["Сортування:", "Sorting:"],
  ["Сортування", "Sorting"],
  ["за датою", "by date"],
  ["за назвою", "by name"],
  ["за результатом", "by result"],
  ["за предметом", "by subject"],
];

// const dictionaryForPersonalCabinet = [
//     ["Особистий кабінет"],
//     ["Змінити фото"],
//     ["Завершити реєстрацію"]
// ]

// const dictionaryForPersonalCabinetStep1 = [
//     ["Для реєстрації на платформі в якості учня, вчителя або партнера перейдіть по кнопці 'Завершити реєстрацію', виберіть у якості кого Ви бажаєте продовжити і заповніть необхідну форму!"],
//     ["Увага, для реєстрації в якості учня чи вчителя спочатку необхідно, щоб Ваш навчальний заклад оформив партнерство з нашою платформою."],
//     ["Це необхідно для захисту та швидкої перевірки Ваших даних"]
// ]

// const dictionaryForPersonalCabinetPopUp1 = [
//     ["Реєстрація"],
//     ["В якості кого Ви бажаєте зареєструватися?"],
//     ["Учень"],
//     ["Вчитель"],
//     ["Партнер"],
//     [""]
// ]

// const dictionaryForPersonalCabinetPopUp2 = [
//     ["Для завершення реєстрації в якості учня необхідно заповнити наступні поля:"],
//     ["Прізвище та ім'я:"],
//     ["Країна:"],
//     ["Область:"],
//     ["Навчальний заклад:"],
//     ["Клас:"]
// ]

// const dictionaryForPersonalCabinetPopUp3 = [
//     ["Для завершення реєстрації в якості вчителя необхідно заповнити наступні поля:"],
//     ["Прізвище та ім'я:"],
//     ["Країна:"],
//     ["Область:"],
//     ["Навчальний заклад:"],
//     ["Предмет:"]
// ]

const pCabinet = document.getElementById("personalCabinet");
const popupChangeImage = document.getElementById("popupChangeImage");
// const pCabinetPopUp = document.getElementById("popupContinueReg");

pCabinet.querySelectorAll(".personal-cabinet-title")[0].innerText = dictionaryForFirstVersion[0][languageId];

let ca = 1;
pCabinet.querySelectorAll(".personal-cabinet-button").forEach((e) => {
  e.innerText = dictionaryForFirstVersion[ca][languageId];
  ca++;
});

pCabinet.querySelector(".list-with-tests-title").innerText = dictionaryForFirstVersion[3][languageId];

let cd = 4;
pCabinet.querySelectorAll(".list-with-tests-null .list-with-tests-null-text").forEach((e) => {
  e.innerText = dictionaryForFirstVersion[cd][languageId];
  cd++;
});

pCabinet.querySelector(".list-with-tests-null-button").innerText = dictionaryForFirstVersion[6][languageId];

pCabinet.querySelectorAll(".list-with-tests-sort .list-with-tests-sort-point-text").forEach((e, index) => {
  e.innerText = dictionaryForSortOfTests[index][languageId];
});

pCabinet.querySelector(".list-with-tests-sort .list-with-tests-sort-button-main-text").innerText = dictionaryForSortOfTests[3][languageId];
pCabinet.querySelector(".list-with-tests-sort .list-with-tests-sort-button-text").innerText = dictionaryForSortOfTests[5][languageId];
document.getElementById("popupSort").querySelector(".popup-sort-header-title").innerText = dictionaryForSortOfTests[4][languageId];
document.getElementById("popupSort").querySelector(".popup-sort-text").innerText = dictionaryForSortOfTests[3][languageId];

let ce = 5;
document
  .getElementById("popupSort")
  .querySelectorAll(".popup-sort-option")
  .forEach((e) => {
    e.innerText = dictionaryForSortOfTests[ce][languageId];
    ce++;
  });

popupChangeImage.querySelector(".popup-change-image-header-title").innerText = dictionaryForChangeImage[0][languageId];
popupChangeImage.querySelector(".popup-change-image-text").innerText = dictionaryForChangeImage[1][languageId];
popupChangeImage.querySelector(".popup-change-image-button").innerText = dictionaryForChangeImage[2][languageId];

// let ca = 1
// pCabinet.querySelectorAll(".personal-cabinet-button").forEach((e) => {
//     e.innerText = dictionaryForPersonalCabinet[ca][languageId];
//     ca++;
// });

// pCabinet.querySelectorAll(".personal-cabinet-point").forEach((e, index) => {
//     e.innerText = dictionaryForPersonalCabinetStep1[index][languageId]
// })

// pCabinetPopUp.querySelectorAll(".popup-header-title").forEach((e) => {
//     e.innerText = dictionaryForPersonalCabinetPopUp1[0][languageId]
// })

// pCabinetPopUp.querySelector(".popup-content[data-stage='1'] .popup-body-title").innerText = dictionaryForPersonalCabinetPopUp1[1][languageId]

// let cb = 2
// pCabinetPopUp.querySelectorAll(".popup-content[data-stage='1'] .popup-body-button p").forEach((e) => {
//     e.innerText = dictionaryForPersonalCabinetPopUp1[cb][languageId]
//     cb++;
// })

// pCabinetPopUp.querySelector(".popup-content[data-stage='2'] .popup-body-container-button").innerText = dictionaryForPersonalCabinet[2][languageId]

// pCabinetPopUp.querySelector(".popup-content[data-stage='3'] .popup-body-container-button").innerText = dictionaryForPersonalCabinet[2][languageId]

// pCabinetPopUp.querySelector(".popup-content[data-stage='2'] .popup-body-title").innerText = dictionaryForPersonalCabinetPopUp2[0][languageId]

// pCabinetPopUp.querySelector(".popup-content[data-stage='3'] .popup-body-title").innerText = dictionaryForPersonalCabinetPopUp3[0][languageId]

// let cc = 1
// pCabinetPopUp.querySelectorAll(".popup-content[data-stage='2'] .popup-body-list-point-title").forEach((e) => {
//     e.innerText = dictionaryForPersonalCabinetPopUp2[cc][languageId]
//     cc++;
// })
// let cd = 1
// pCabinetPopUp.querySelectorAll(".popup-content[data-stage='3'] .popup-body-list-point-title").forEach((e) => {
//     e.innerText = dictionaryForPersonalCabinetPopUp3[cd][languageId]
//     cd++;
// })
