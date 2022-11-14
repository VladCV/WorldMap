const libraryForTheHeader = [["Головна"], ["Мапа"], ["Про платформу"], ["Авторизація"], ["Особистий кабінет"], ["Вийти"]];

const libraryForTheFooter = [
  ["Користувачі"],
  ["О нас"],
  ["FAQ"],

  ["Неавторизовані"],
  ["Авторизовані"],
  //["Учні"],
  //["Вчителі"],

  ["Про платформу"],
  //["Стати партнером"],

  ["Часто поставлені питання"],

  ["<span>Побачили</span> якусь неточність у даних?"],
  ["<span>Напишіть</span> нам про це, і ми все виправимо"],
  ["Написати"],

  ["Зворотній зв'язок"],
  ["Ім'я Прізвище"],
  ["Опис проблеми"],
  ["Надіслати"],
];

//let languageId = localStorage.getItem("languageId");

console.log("languageId = " + languageId);

document
  .querySelector(".header")
  .querySelectorAll(".list-point-link")
  .forEach((e, i = 0) => {
    e.innerText = libraryForTheHeader[i][languageId];
  });

document.querySelector(".header").querySelector('[data-type="signIn"]').innerText = libraryForTheHeader[libraryForTheHeader.length - 3][languageId];
document.querySelector(".header").querySelector('[data-type="cabinet"]').innerText = libraryForTheHeader[libraryForTheHeader.length - 2][languageId];
document.querySelector(".header").querySelector('[data-type="signOut"]').innerText = libraryForTheHeader[libraryForTheHeader.length - 1][languageId];

document
  .querySelector(".footer")
  .querySelectorAll(".footer-column-caption")
  .forEach((e, i = 0) => {
    e.innerText = libraryForTheFooter[i][languageId];
  });

let da = 3;
document
  .querySelector(".footer")
  .querySelectorAll(".footer-list-point-link")
  .forEach((e) => {
    e.innerText = libraryForTheFooter[da][languageId];
    da++;
  });

let db = 7;
document
  .querySelector(".footer")
  .querySelectorAll(".footer-column-text")
  .forEach((e) => {
    e.innerHTML = libraryForTheFooter[db][languageId];
    db++;
  });

document.querySelector(".footer .footer-button").innerText = libraryForTheFooter[9][languageId];

document.querySelector("#popupCallBack .popup-callback-header-title").innerText = libraryForTheFooter[10][languageId];

let fa = 11;
document.querySelectorAll("#popupCallBack .popup-callback-body-input-text").forEach((e) => {
  e.innerText = libraryForTheFooter[fa][languageId];
  fa++;
});

document.querySelector("#popupCallBack .popup-callback-body-button").innerText = libraryForTheFooter[13][languageId];
