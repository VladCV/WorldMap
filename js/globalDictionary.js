const libraryForTheHeader = [
    ["Головна"],
    ["Про платформу"],
    ["Контакти"],
    ["Авторизація"],
    ["Особистий кабінет"],
    ["Вийти"],
]

const libraryForTheFooter = [
    ["Користувачі"],
    ["Співробітництво"],
    ["FAQ"],

    ["Неавторизовані"],
    ["Учні"],
    ["Вчителі"],

    ["Партнери"],
    ["Стати партнером"],

    ["Часто поставлені питання"],

    ["<span>Побачили</span> якусь неточність у даних?"],
    ["<span>Напишіть</span> нам про це, і ми все виправимо"],
    ["Написати"]
]

//let languageId = localStorage.getItem("languageId");

console.log("languageId = " + languageId)

document.querySelector('.header').querySelectorAll(".list-point-link").forEach((e, i = 0) => {
    e.innerText = libraryForTheHeader[i][languageId]
})

document.querySelector('.header').querySelector('[data-type="signIn"]').innerText = libraryForTheHeader[libraryForTheHeader.length - 3][languageId]
document.querySelector('.header').querySelector('[data-type="cabinet"]').innerText = libraryForTheHeader[libraryForTheHeader.length - 2][languageId]
document.querySelector('.header').querySelector('[data-type="signOut"]').innerText = libraryForTheHeader[libraryForTheHeader.length - 1][languageId]

document.querySelector('.footer').querySelectorAll('.footer-column-caption').forEach((e, i = 0) => {
    e.innerText = libraryForTheFooter[i][languageId]
})

let da = 3;
document.querySelector('.footer').querySelectorAll('.footer-list-point').forEach((e) => {
    e.innerText = libraryForTheFooter[da][languageId]
    da++;
})

let db = 9;
document.querySelector('.footer').querySelectorAll('.footer-column-text').forEach((e) => {
    e.innerHTML = libraryForTheFooter[db][languageId]
    db++;
})

document.querySelector('.footer').querySelector('.footer-button').innerText = libraryForTheFooter[libraryForTheFooter.length - 1][languageId]