let languageId, languageCode;
let newLanguageCode;

function toIndex() {
  document.location.href = "../index.html";
}

function finishPreloader() {
  document.getElementById("preloader").classList += " disactive"
  console.log("Page is loaded -> Preloader is finished")
}

body = document.getElementById("body");

if (body.dataset.page != "index" && body.dataset.page != "selectedTest") {
  document.querySelector(".header").classList += " bg";
  document.querySelectorAll(".list-point-link").forEach((e) => {
    e.classList = "list-point-link";
  });
}

if (localStorage.getItem("languageCode")) {
  languageCode = localStorage.getItem("languageCode");
  switch (languageCode) {
    case "ua":
      languageId = 0;
      localStorage.setItem("languageId", languageId);
      document.getElementById("buttonLanguageText").innerText = "Українська";
      break;
    case "en":
      languageId = 1;
      localStorage.setItem("languageId", languageId);
      document.getElementById("buttonLanguageText").innerText = "English";
      break;
  }
} else {
  languageId = 0;
  languageCode = "ua";
  localStorage.setItem("languageId", languageId);
  localStorage.setItem("languageCode", languageCode);
}

if (document.getElementById("footerButtonForCallBack")) {
  document.getElementById("footerButtonForCallBack").addEventListener("click", (e) => {
    document.getElementById("popupCallBack").className = "popup-callback-container active";
    body.classList = " popup-active";
    document.querySelector("#popupCallBack .popup-callback-content").className = "popup-callback-content active";
  });
}

if (document.getElementById("popupCallBack")) {
  document.getElementById("popupCallBack").addEventListener("click", (e) => {
    if (e.target.className == "popup-callback-bg" || e.target.className == "popup-callback-close") {
      document.getElementById("popupCallBack").className = "popup-container";
      document.querySelector("#popupCallBack .popup-callback-content.active").className = "popup-callback-content";
      body.className = "";
    }
  });
}

document.getElementById("buttonLanguage").addEventListener("click", (e) => {
  document.getElementById("body").className = "body popup-active";
  document.getElementById("popupChangeLanguage").className = "popup-change-language-container active";
  document.querySelector(".popup-change-language-content").className = "popup-change-language-content active";
});

document.getElementById("popupChangeLanguage").addEventListener("click", (e) => {
  if (e.target.className == "popup-change-language-bg" || e.target.className == "popup-change-language-close" || e.target.className == "popup-change-language-button") {
    document.getElementById("popupChangeLanguage").className = "popup-change-language-container";
    document.querySelector(".popup-change-language-content.active").className = "popup-change-language-content";
    document.getElementById("body").className = "body";
  }
});

document.getElementById("popupChangeLanguageInput").addEventListener("focus", () => {
  document.getElementById("popupChangeLanguageDatalist").style.display = "block";
  document.getElementById("popupChangeLanguageInput").style.borderRadius = "10px 10px 0 0";
});

document.getElementById("popupChangeLanguageButton").addEventListener("click", () => {
  console.log(newLanguageCode);
  localStorage.setItem("languageCode", newLanguageCode);
  document.location.reload();
});

document.querySelectorAll("#popupChangeLanguageDatalist option").forEach((e) => {
  e.addEventListener("click", (e) => {
    let tempLanguage = e.srcElement;
    newLanguageCode = tempLanguage.dataset.languagecode;
    document.getElementById("popupChangeLanguageInput").value = tempLanguage.value;
    document.getElementById("popupChangeLanguageDatalist").style.display = "none";
    document.getElementById("popupChangeLanguageInput").style.borderRadius = "10px";
  });
});

var currentFocus = -1;

document.getElementById("popupChangeLanguageInput").addEventListener("input", (e) => {
  currentFocus = -1;
  var tempInputText = document.getElementById("popupChangeLanguageInput").value.toUpperCase();
  document.querySelectorAll("#popupChangeLanguageDatalist option").forEach((e) => {
    if (e.value.toUpperCase().indexOf(tempInputText) > -1) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
});

// input.onkeydown = function (e) {
//   if (e.keyCode == 40) {
//     currentFocus++;
//     addActive(browsers.options);
//   } else if (e.keyCode == 38) {
//     currentFocus--;
//     addActive(browsers.options);
//   } else if (e.keyCode == 13) {
//     e.preventDefault();
//     if (currentFocus > -1) {
//       /*and simulate a click on the "active" item:*/
//       if (browsers.options) browsers.options[currentFocus].click();
//     }
//   }
// };

// function addActive(x) {
//   if (!x) return false;
//   removeActive(x);
//   if (currentFocus >= x.length) currentFocus = 0;
//   if (currentFocus < 0) currentFocus = x.length - 1;
//   x[currentFocus].classList.add("active");
// }
// function removeActive(x) {
//   for (var i = 0; i < x.length; i++) {
//     x[i].classList.remove("active");
//   }
// }
