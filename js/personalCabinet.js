const subjects = [["Географія"], ["Історія"]];

const geographyTitleTests = [["“Країна - столиця”"], ["“Країна - адміністративні одиниці”"], ["“Міжнародна організація - країни-учасниці”"]];
const historyTitleTests = [
    [""],
    [""]
]
const informationAboutThePerson = JSON.parse(sessionStorage.getItem("user"));
console.log(informationAboutThePerson);

const wayToPersonalCabinet = document.getElementById("personalCabinet");
const popupInputsWithDatalist = document.querySelectorAll(".input-datalist");
const popupDatalistCountries = document.getElementById("input-countries");

wayToPersonalCabinet.querySelector(".personal-cabinet-photo").src = informationAboutThePerson["userPhoto"];
wayToPersonalCabinet.querySelector(".personal-cabinet-name").innerText = informationAboutThePerson["userName"];

document.getElementById("buttonToTests").addEventListener("click", () => {
  sessionStorage.setItem("leftMenu2", true);
  document.location.href = "map.html";
});

function showTests(testFromBD) {
  const wayToLoadTests = document.getElementById("listWithTests");

  testFromBD.forEach((child) => {
    console.log(child)
    const tempTest = child.val();
    

    let tempDiv1 = document.createElement("div");
    tempDiv1.className = "test-container";
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

    tempDiv1.id = tempTest.informationAboutTest.id

    tempP1.innerText = subjects[parseInt(tempTest.informationAboutTest.subject)][0];
    tempP2.innerText = translateTime(tempTest.informationAboutTest.date);

    switch (tempTest.informationAboutTest.subject) {
      case "0":
        tempP3.innerText = geographyTitleTests[parseInt(tempTest.informationAboutTest.test)][0]
        break;
      case "1":
        tempP3.innerText = historyTitleTests[parseInt(tempTest.informationAboutTest.test)][0]
        break;
    }

    tempP4.innerText = tempTest.informationAboutTest.correctedAnswers + '/' + tempTest.listWithQuestions.length
    tempP5.innerText = tempTest.informationAboutTest.spendTime
    
    tempDiv2.appendChild(tempP1);
    tempDiv2.appendChild(tempP2);

    tempDiv3.appendChild(tempP4);
    tempDiv3.appendChild(tempP5);

    tempDiv1.appendChild(tempDiv2);
    tempDiv1.appendChild(tempP3);
    tempDiv1.appendChild(tempDiv3);

    wayToLoadTests.appendChild(tempDiv1);
    console.log(tempTest);
    // console.log("now = " + Date.milliseconds);
    // console.log("timeFromBD = " + tempTest.informationAboutTest.date);
    // console.log(translateTime(tempTest.informationAboutTest.date));
  });
  // console.log(Array(testFromBD.val()))
  // Array.from(testFromBD).forEach(e => {
  //     console.log(e)
  // });
  //console.log(translateTime())
}

function translateTime(millisec) {
  const date12 = new Date(millisec);

  console.log(millisec)
  const dayAndHours = date12.toLocaleString("sv");

  console.log(date12)

  let tempDate = date12.getDate() < 10 ? "0" + date12.getDate() : date12.getDate()
  let tempMonth = date12.getMonth() < 9 ? "0" + (date12.getMonth() + 1) : (date12.getMonth() + 1)
  let tempHours = date12.getHours() < 10 ? "0" + date12.getHours() : date12.getHours()
  let tempMinutes = date12.getMinutes() < 10 ? "0" + date12.getMinutes() : date12.getMinutes()

  return `${tempDate}.${tempMonth}.${date12.getFullYear()} ${tempHours}:${tempMinutes}` ;
}

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
