const dictionaryForPersonalCabinet = [
    ["Особистий кабінет"],
    ["Змінити фото"],
    ["Завершити реєстрацію"]
]

const dictionaryForPersonalCabinetStep1 = [
    ["Для реєстрації на платформі в якості учня, вчителя або партнера перейдіть по кнопці 'Завершити реєстрацію', виберіть у якості кого Ви бажаєте продовжити і заповніть необхідну форму!"],
    ["Увага, для реєстрації в якості учня чи вчителя спочатку необхідно, щоб Ваш навчальний заклад оформив партнерство з нашою платформою."],
    ["Це необхідно для захисту та швидкої перевірки Ваших даних"]
]

const dictionaryForPersonalCabinetPopUp1 = [
    ["Реєстрація"],
    ["В якості кого Ви бажаєте зареєструватися?"],
    ["Учень"],
    ["Вчитель"],
    ["Партнер"],
    [""]
]

const dictionaryForPersonalCabinetPopUp2 = [
    ["Для завершення реєстрації в якості учня необхідно заповнити наступні поля:"],
    ["Прізвище та ім'я:"],
    ["Країна:"],
    ["Область:"],
    ["Навчальний заклад:"],
    ["Клас:"]
]

const dictionaryForPersonalCabinetPopUp3 = [
    ["Для завершення реєстрації в якості вчителя необхідно заповнити наступні поля:"],
    ["Прізвище та ім'я:"],
    ["Країна:"],
    ["Область:"],
    ["Навчальний заклад:"],
    ["Предмет:"]
]
const pCabinet = document.getElementById("personalCabinet");
const pCabinetPopUp = document.getElementById("popupContinueReg");

pCabinet.querySelectorAll(".personal-cabinet-title")[0].innerText = dictionaryForPersonalCabinet[0][languageId]

let ca = 1
pCabinet.querySelectorAll(".personal-cabinet-button").forEach((e) => {
    e.innerText = dictionaryForPersonalCabinet[ca][languageId];
    ca++;
});

pCabinet.querySelectorAll(".personal-cabinet-point").forEach((e, index) => {
    e.innerText = dictionaryForPersonalCabinetStep1[index][languageId]
})

pCabinetPopUp.querySelectorAll(".popup-header-title").forEach((e) => {
    e.innerText = dictionaryForPersonalCabinetPopUp1[0][languageId]
})

pCabinetPopUp.querySelector(".popup-content[data-stage='1'] .popup-body-title").innerText = dictionaryForPersonalCabinetPopUp1[1][languageId]

let cb = 2
pCabinetPopUp.querySelectorAll(".popup-content[data-stage='1'] .popup-body-button p").forEach((e) => {
    e.innerText = dictionaryForPersonalCabinetPopUp1[cb][languageId]
    k++;
})

pCabinetPopUp.querySelector(".popup-content[data-stage='2'] .popup-body-container-button").innerText = dictionaryForPersonalCabinet[2][languageId]

pCabinetPopUp.querySelector(".popup-content[data-stage='3'] .popup-body-container-button").innerText = dictionaryForPersonalCabinet[2][languageId]

pCabinetPopUp.querySelector(".popup-content[data-stage='2'] .popup-body-title").innerText = dictionaryForPersonalCabinetPopUp2[0][languageId]

pCabinetPopUp.querySelector(".popup-content[data-stage='3'] .popup-body-title").innerText = dictionaryForPersonalCabinetPopUp3[0][languageId]

let cc = 1
pCabinetPopUp.querySelectorAll(".popup-content[data-stage='2'] .popup-body-list-point-title").forEach((e) => {
    e.innerText = dictionaryForPersonalCabinetPopUp2[cc][languageId]
    cc++;
})
let cd = 1
pCabinetPopUp.querySelectorAll(".popup-content[data-stage='3'] .popup-body-list-point-title").forEach((e) => {
    e.innerText = dictionaryForPersonalCabinetPopUp3[cd][languageId]
    cd++;
})