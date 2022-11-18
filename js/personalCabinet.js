const subjects = [["Географія"], ["Історія"]];

const geographyTitleTests = [["“Країна - столиця”"], ["“Країна - адміністративні одиниці”"], ["“Міжнародна організація - країни-учасниці”"]];

const historyTitleTests = [[""], [""]];
const dictionaryForInformationAboutTheTest = [
  ["Тест: "],
  ["Інформація про тест: "],
  ["Час проходження: "],
  ["Предмет: "],
  ["Кіл-сть правильних ответів: "],
  ["Регіон: "],
  ["Кіл-сть питань: "],
  ["Вірно"],
  ["Невірно"],
  ["Завдання: "],
  ["Відповідь: "],
  ["Відправити"],
];

const dictionaryForContinents = [["Всесвіт"], ["Європа"], ["Азія"], ["Африка"], ["Північна Америка"], ["Південна Америка"]];

const dictionaryForTests = [["Країна - столиця"], ["Країна - адміністративні одиниці"], ["Міжнародна організація - країни-учасниці"]];

const dictionaryForSubjects = [["Географія"], ["Історія"]];

const informationAboutThePerson = JSON.parse(sessionStorage.getItem("user"));
console.log(informationAboutThePerson);

const wayToPersonalCabinet = document.getElementById("personalCabinet");
const popupInputsWithDatalist = document.querySelectorAll(".input-datalist");
const popupDatalistCountries = document.getElementById("input-countries");

const wayToLoadTests = document.getElementById("listWithTests");

const wayToTests = document.getElementById("popupContainerForTests");

let arrWithTests = [];

wayToPersonalCabinet.querySelector(".personal-cabinet-photo").src = informationAboutThePerson["userPhoto"];
wayToPersonalCabinet.querySelector(".personal-cabinet-name").innerText = informationAboutThePerson["userName"];

document.getElementById("buttonToTests").addEventListener("click", () => {
  sessionStorage.setItem("leftMenu2", true);
  document.location.href = "map.html";
});

function showTests(testFromBD) {
  testFromBD.forEach((child) => {
    console.log(child);
    const tempTest = child.val();
    arrWithTests = testFromBD.val();

    let tempDiv1 = document.createElement("div");
    tempDiv1.className = "test-container";
    tempDiv1.addEventListener("click", showInformationAboutTest);
    let tempDiv2 = document.createElement("div");
    tempDiv2.className = "test-subject-and-date";
    let tempDiv3 = document.createElement("div");
    tempDiv3.className = "test-mark-and-time";
    let tempP1 = document.createElement("p");
    tempP1.className = "test-subject";
    let tempP2 = document.createElement("p");
    tempP2.className = "test-date";
    let tempP3 = document.createElement("p");
    tempP3.className = "test-title";
    let tempP4 = document.createElement("p");
    tempP4.className = "test-mark";
    let tempP5 = document.createElement("p");
    tempP5.className = "test-time";

    tempDiv1.id = tempTest.informationAboutTest.id;

    tempP1.innerText = subjects[parseInt(tempTest.informationAboutTest.subject)][0];
    tempP2.innerText = translateTime(tempTest.informationAboutTest.date);

    switch (tempTest.informationAboutTest.subject) {
      case "0":
        tempP3.innerText = geographyTitleTests[parseInt(tempTest.informationAboutTest.test)][0];
        break;
      case "1":
        tempP3.innerText = historyTitleTests[parseInt(tempTest.informationAboutTest.test)][0];
        break;
    }

    tempP4.innerText = tempTest.informationAboutTest.correctedAnswers + "/" + tempTest.listWithQuestions.length;
    tempP5.innerText = tempTest.informationAboutTest.spendTime;

    tempDiv2.appendChild(tempP1);
    tempDiv2.appendChild(tempP2);

    tempDiv3.appendChild(tempP4);
    tempDiv3.appendChild(tempP5);

    tempDiv1.appendChild(tempDiv2);
    tempDiv1.appendChild(tempP3);
    tempDiv1.appendChild(tempDiv3);

    wayToLoadTests.appendChild(tempDiv1);
    console.log(tempTest);
  });
}

function translateTime(millisec) {
  const date12 = new Date(millisec);

  console.log(millisec);
  const dayAndHours = date12.toLocaleString("sv");

  console.log(date12);

  let tempDate = date12.getDate() < 10 ? "0" + date12.getDate() : date12.getDate();
  let tempMonth = date12.getMonth() < 9 ? "0" + (date12.getMonth() + 1) : date12.getMonth() + 1;
  let tempHours = date12.getHours() < 10 ? "0" + date12.getHours() : date12.getHours();
  let tempMinutes = date12.getMinutes() < 10 ? "0" + date12.getMinutes() : date12.getMinutes();

  return `${tempDate}.${tempMonth}.${date12.getFullYear()} ${tempHours}:${tempMinutes}`;
}

function showInformationAboutTest() {
  wayToTests.innerHTML = ""
  document.getElementById("body").className = "popup-active";
  document.getElementById("popupInformationAboutTheTest").className = "popup-information-about-the-test-container active";
  document.querySelector(".popup-information-about-the-test-content").className = "popup-information-about-the-test-content active";
  let tempInformationAboutTest = arrWithTests[this.id];
  console.log(tempInformationAboutTest.listWithQuestions);

  document.querySelector(".popup-information-about-the-test-header-title").innerText =
    dictionaryForInformationAboutTheTest[0][languageId] + '"' + dictionaryForTests[tempInformationAboutTest.informationAboutTest.test] + '"';
  document.querySelector(".popup-information-about-the-test-information-text").innerText = dictionaryForInformationAboutTheTest[1][languageId];
  document.querySelector(".popup-information-about-the-test-information-info[data-infoAboutTheTest='time']").innerText =
    dictionaryForInformationAboutTheTest[2][languageId] + tempInformationAboutTest.informationAboutTest.spendTime;
  document.querySelector(".popup-information-about-the-test-information-info[data-infoAboutTheTest='subject']").innerText =
    dictionaryForInformationAboutTheTest[3][languageId] + dictionaryForSubjects[tempInformationAboutTest.informationAboutTest.subject][languageId];
  document.querySelector(".popup-information-about-the-test-information-info[data-infoAboutTheTest='trueAnswers']").innerText =
    dictionaryForInformationAboutTheTest[4][languageId] + tempInformationAboutTest.informationAboutTest.correctedAnswers;
  document.querySelector(".popup-information-about-the-test-information-info[data-infoAboutTheTest='continent']").innerText =
    dictionaryForInformationAboutTheTest[5][languageId] + tempInformationAboutTest.informationAboutTest.region;
  document.querySelector(".popup-information-about-the-test-information-info[data-infoAboutTheTest='questions']").innerText =
    dictionaryForInformationAboutTheTest[6][languageId] + tempInformationAboutTest.informationAboutTest.numberOfAnswers;

  tempInformationAboutTest.listWithQuestions.forEach((e, index) => {
    let tempInformationAboutQuestions = e;

    let tempNumberOfTheQuestion = index + 1;
    let tempCorrectly = tempInformationAboutQuestions.correctAnswer == true ? dictionaryForInformationAboutTheTest[7][languageId] : dictionaryForInformationAboutTheTest[8][languageId];
    console.log(tempCorrectly);
    let tempQuestion = tempInformationAboutQuestions.questionText;
    let tempAnswer = tempInformationAboutQuestions.answer;

    let tempQuestionContent = document.createElement("div");
    tempQuestionContent.className = "popup-information-about-the-test-question-content";
    let tempQuestionNumberAndCorrectly = document.createElement("div");
    tempQuestionNumberAndCorrectly.className = "popup-information-about-the-test-question-number-and-correctly";
    let tempQuestionNumber = document.createElement("p");
    tempQuestionNumber.className = "popup-information-about-the-test-question-number";
    let tempQuestionCorrectly = document.createElement("p");
    tempQuestionCorrectly.className = "popup-information-about-the-test-question-correctly";
    let tempQuestionQuestionAndAnswer = document.createElement("div");
    tempQuestionQuestionAndAnswer.className = "popup-information-about-the-test-question-question-and-answer";
    let tempQuestionQuestion = document.createElement("p");
    tempQuestionQuestion.className = "popup-information-about-the-test-question-question";
    let tempQuestionAnswer = document.createElement("p");
    tempQuestionAnswer.className = "popup-information-about-the-test-question-answer";

    tempQuestionNumber.innerText = "№" + tempNumberOfTheQuestion;
    if (tempInformationAboutQuestions.correctAnswer) {
      tempQuestionCorrectly.innerText = dictionaryForInformationAboutTheTest[7][languageId];
      tempQuestionCorrectly.classList += " correctly";
    } else {
      tempQuestionCorrectly.innerText = dictionaryForInformationAboutTheTest[8][languageId];
      tempQuestionCorrectly.classList += " uncorrectly";
    }

    tempQuestionQuestion.innerHTML = "<span>" + dictionaryForInformationAboutTheTest[9][languageId] + "</span>" + tempQuestion;
    tempQuestionAnswer.innerHTML = "<span>" + dictionaryForInformationAboutTheTest[10][languageId] + "</span>" + tempAnswer;
    tempQuestionNumberAndCorrectly.appendChild(tempQuestionNumber);
    tempQuestionNumberAndCorrectly.appendChild(tempQuestionCorrectly);

    tempQuestionQuestionAndAnswer.appendChild(tempQuestionQuestion);
    tempQuestionQuestionAndAnswer.appendChild(tempQuestionAnswer);

    tempQuestionContent.appendChild(tempQuestionNumberAndCorrectly);
    tempQuestionContent.appendChild(tempQuestionQuestionAndAnswer);

    wayToTests.appendChild(tempQuestionContent);
  });
}

document.getElementById("popupInformationAboutTheTest").addEventListener("click", (e) => {
  if (
    e.target.className == "popup-information-about-the-test-bg" ||
    e.target.className == "popup-information-about-the-test-close" ||
    e.target.className == "popup-information-about-the-test-button"
  ) {
    document.getElementById("popupInformationAboutTheTest").className = "popup-information-about-the-test-container";
    document.querySelector(".popup-information-about-the-test-content.active").className = "popup-information-about-the-test-content";
    document.getElementById("body").className = "body";
  }
});

// document.getElementById("buttonSignOut").setAttribute("style", "display:flex");
// document.getElementById("buttonSignIn").setAttribute("style", "display:none");

// document.getElementById("continueReg").addEventListener("click", () => {
//     document.getElementById("popupContinueReg").classList += " active";
//     document.getElementById("body").classList += "popup-active"
// })

// document.getElementById("popupContinueRegBg").addEventListener("click", (e) => {
//     if (e.target.className == "popup-bg" || e.target.className == "popup-close") {
//         document.getElementById("popupContinueReg").className = "popup-container";
//         document.getElementById("body").className = ""
//     }
// })

// document.querySelectorAll(".popup-body-button").forEach((e) => {
//     e.addEventListener("click", () => {
//         if (e.classList != "disactive") {
//             if (e.dataset.mode == "student") {
//                 document.querySelector(".popup-content[data-stage='1']").classList = "popup-content"
//                 document.querySelector(".popup-content[data-stage='2']").classList += " active"
//             }
//             if (e.dataset.mode == "teacher") {
//                 document.querySelector(".popup-content[data-stage='1']").classList = "popup-content"
//                 document.querySelector(".popup-content[data-stage='3']").classList += " active"
//             }
//         }
//     })
// })

// document.querySelectorAll(".popup-back").forEach((e) => {
//     e.addEventListener("click", () => {
//         document.querySelector(".popup-content.active").classList = "popup-content"
//         document.querySelector(".popup-content[data-stage='1']").classList = "popup-content active"
//     })
// })

// popupInputsWithDatalist.forEach((input) => {
//     input.addEventListener("focus", (e) => {
//         e.target.style.display = 'block';
//         e.target.style.borderRadius = "10px 10px 0 0";
//         let list = e.target.dataset.list;
//         if (list == "studentCountries") {
//             //
//         }
//     })
//     // input.addEventListener("unfocus", (e) => {
//     //     console.log(e)
//     // })
// })

//console.log(popupDatalistCountries)

// for (let option of popupDatalistCountries.options) {
//     option.onclick = function () {
//         input.value = option.value;
//         browsers.style.display = 'none';
//         input.style.borderRadius = "5px";
//     }
// }

// for (let option of browsers.options) {
//     option.onclick = function () {
//         input.value = option.value;
//         browsers.style.display = 'none';
//         input.style.borderRadius = "5px";
//     }
// };

// input.oninput = function () {
//     currentFocus = -1;
//     var text = input.value.toUpperCase();
//     for (let option of browsers.options) {
//         if (option.value.toUpperCase().indexOf(text) > -1) {
//             option.style.display = "block";
//         } else {
//             option.style.display = "none";
//         }
//     };
// }
// var currentFocus = -1;
// input.onkeydown = function (e) {
//     if (e.keyCode == 40) {
//         currentFocus++
//         addActive(browsers.options);
//     }
//     else if (e.keyCode == 38) {
//         currentFocus--
//         addActive(browsers.options);
//     }
//     else if (e.keyCode == 13) {
//         e.preventDefault();
//         if (currentFocus > -1) {
//             /*and simulate a click on the "active" item:*/
//             if (browsers.options) browsers.options[currentFocus].click();
//         }
//     }
// }

// function addActive(x) {
//     if (!x) return false;
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     x[currentFocus].classList.add("active");
// }
// function removeActive(x) {
//     for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("active");
//     }
// }
