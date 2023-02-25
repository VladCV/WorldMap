const libraryForTheHeader = [["Головна", "Main"], ["Мапа", "Map"], ["Про сайт", "About the site"], ["Авторизація", "Authorization"], ["Особистий кабінет", "Personal cabinet"], ["Вийти", "Log out"]];

const libraryForTheFooter = [
  ["Користувачі", "Users"],
  ["О нас", "About us"],
  ["FAQ", "FAQ"],

  ["Неавторизовані", "Not authorized"],
  ["Авторизовані", "Authorized"],
  //["Учні"],
  //["Вчителі"],

  ["Про платформу", "About the site"],
  //["Стати партнером"],

  ["Часто поставлені питання", "Frequently asked questions"],

  ["<span>Побачили</span> якусь неточність у даних?", "<span>See</span> any inaccuracy in the data?"],
  ["<span>Напишіть</span> нам про це, і ми все виправимо", "<span>Email</span> us about it and we'll fix it"],
  ["Написати", "Send"],

  ["Зворотній зв'язок", "Feedback"],
  ["Ім'я Прізвище", "Name"],
  ["Опис проблеми", "Description of the problem"],
  ["Надіслати", "Send"],
];

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
