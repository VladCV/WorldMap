const questionsForTests = [[" Натисніть на країну з назвою "], [" Натисніть на країну зі столицею "], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]];

const listOfCountries = [
  // Країни Світу
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
  // Країни Європи
  [
    ["Україна"],
    ["Франція"],
    ["Іспанія"],
    ["Швеція"],
    ["Норвегія"],
    ["Німеччина"],
    ["Фінляндія"],
    ["Польща"],
    ["Італія"],
    ["Велика Британія"],
    ["Румунія"],
    ["Білорусь"],
    ["Греція"],
    ["Болгарія"],
    ["Ісландія"],
    ["Угорщина"],
    ["Португалія"],
    ["Австрія"],
    ["Чехія"],
    ["Сербія"],
    ["Ірландія"],
    ["Грузія"],
    ["Литва"],
    ["Латвія"],
    ["Хорватія"],
    ["Боснія і Герцеговина"],
    ["Словаччина"],
    ["Естонія"],
    ["Данія"],
    ["Нідерланди"],
    ["Швейцарія"],
    ["Молдова"],
    ["Бельгія"],
    ["Албанія"],
    ["Північна Македонія"],
    ["Туреччина"],
    ["Словенія"],
    ["Чорногорія"],
    ["Косово"],
    ["Кіпр"],
    ["Люксембург"],
    ["Андорра"],
    ["Мальта"],
    ["Ліхтенштейн"],
    ["Сан-Марино"],
    ["Монако"],
    ["Ватикан"],
  ],
  // Країни Азії
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
  // Країни Африки
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
  // Країни Північної Америки
  [
    ["Канада"],
    ["США"],
    ["Беліз"],
    ["Гватемала"],
    ["Гондурас"],
    ["Коста-Рика"],
    ["Мексика"],
    ["Нікарагуа"],
    ["Панама"],
    ["Сальвадор"],
    ["Антигуа і Барбуда"],
    ["Багамські Острови"],
    ["Барбадос"],
    ["Гаїті"],
    ["Гренада"],
    ["Домініка"],
    ["Домініканська Республіка"],
    ["Куба"],
    ["Сент-Вінсент і Гренадини"],
    ["Сент-Кіттс і Невіс"],
    ["Сент-Люсія"],
    ["Тринідад і Тобаго"],
    ["Ямайка"],
  ],
  // Країни Південної Америки
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
];

const listOfCapitals = [
  // Столиці Світу
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
  // Столиці Європи
  [
    ["Київ"],
    ["Париж"],
    ["Мадрид"],
    ["Стокгольм"],
    ["Осло"],
    ["Берлін"],
    ["Гельсінкі"],
    ["Варшава"],
    ["Рим"],
    ["Лондон"],
    ["Бухарест"],
    ["Мінськ"],
    ["Афіни"],
    ["Софія"],
    ["Рейк'явік"],
    ["Будапешт"],
    ["Лісабон"],
    ["Відень"],
    ["Прага"],
    ["Белград"],
    ["Дублін"],
    ["Тбілісі"],
    ["Вільнюс"],
    ["Рига"],
    ["Загреб"],
    ["Сараєво"],
    ["Братислава"],
    ["Таллінн"],
    ["Копенгаген"],
    ["Амстердам"],
    ["Берн"],
    ["Кишинів"],
    ["Брюссель"],
    ["Тирана"],
    ["Скоп'є"],
    ["Анкара"],
    ["Любляна"],
    ["Подгориця"],
    ["Приштина"],
    ["Нікосія"],
    ["Люксембург"],
    ["Андорра-ла-Велья"],
    ["Валлетта"],
    ["Вадуц"],
    ["Сан-Марино"],
    ["Монако"],
    ["Ватикан"],
  ],
  // Столиці Азії
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
  // Столиці Африки
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
  // Столиці Північної Америки
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
  // Столиці Південної Америки
  [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ],
];

popupTestGeography1.querySelectorAll(".popup-body-list-point-text-info-icon").forEach((country) => {
  country.addEventListener("mouseenter", function () {
    tool3.style.display = "block";
  });
  country.addEventListener("mousemove", function (e) {
    tool3.style.top = getBodyScrollTop() + 15 + e.y + "px";
    tool3.style.left = 15 + e.x + "px";
  });
  country.addEventListener("mouseleave", function () {
    tool3.style.display = "none";
  });
});

let popupTestGeographyInfo0 = "";
let popupTestGeographyInfo1 = "";
let popupTestGeographyInfo2 = "";
let popupTestGeographyInfo3 = "";
let popupTestGeographyInfo4 = "";

if (sessionStorage.getItem("stageOfTest") == "finished") {
  switch (sessionStorage.getItem("numberOfTest")) {
    case "1":
      finishGeographyTest1();
      break;
    case "2":
      finishGeographyTest2();
      break;
    case "3":
      finishGeographyTest3();
      break;
  }
}

popupTestGeography1.querySelector(".popup-body[data-testStage='1'] .popup-body-button").addEventListener("click", function () {
  popupTestGeographyInfo0 = "1";
  popupTestGeographyInfo1 = popupTestGeography1.querySelector(".popup-body-list-point-input[name='selectRegionOfTheWorld']").value;
  popupTestGeographyInfo2 = popupTestGeography1.querySelector(".popup-body-list-point-input[name='selectKnowledge']").value;
  popupTestGeographyInfo3 = popupTestGeography1.querySelector(".popup-body-list-point-input[name='inputNumberQuestions']").value;
  popupTestGeographyInfo4 = popupTestGeography1.querySelector(".popup-body-list-point-input[name='inputTimeForTest']").value;
  document.location = `selectedTest.html?test=${popupTestGeographyInfo0}&r=${popupTestGeographyInfo1}&k=${popupTestGeographyInfo2}&c=${popupTestGeographyInfo3}&t=${popupTestGeographyInfo4}`;
});

function finishGeographyTest1() {
  document.getElementById("body").classList += " popup-active";
  document.getElementById("popupTestsInMap").className = "popup-container active";
  popupTestGeography1.className = "popup-content active";
  popupTestGeography1.querySelector(".popup-body[data-testStage='4']").className = "popup-body active";

  popupTestGeography1.querySelector(".popup-body[data-testStage='4'] .popup-body-list-point-input[data-input='region'] .popup-body-list-point-input-information").innerText =
    sessionStorage.getItem("region");
  popupTestGeography1.querySelector(".popup-body[data-testStage='4'] .popup-body-list-point-input[data-input='numberQuestions'] .popup-body-list-point-input-information").innerText =
    sessionStorage.getItem("numberOfQuestions");
  popupTestGeography1.querySelector(".popup-body[data-testStage='4'] .popup-body-list-point-input[data-input='numberTrueAnswers'] .popup-body-list-point-input-information").innerText =
    sessionStorage.getItem("correctedAnswers");
  popupTestGeography1.querySelector(".popup-body[data-testStage='4'] .popup-body-list-point-input[data-input='spendTime'] .popup-body-list-point-input-information").innerText =
    sessionStorage.getItem("time");
}

popupTestGeography1.querySelector(".popup-body[data-testStage='4'] .popup-body-button").addEventListener("click", function () {
  document.getElementById("popupTestsInMap").className = "popup-container";
  popupTestGeography1.className = "popup-content";
  popupTestGeography1.querySelector(".popup-body[data-testStage='1']").className = "popup-body";
  sessionStorage.removeItem("stageOfTest")
});
