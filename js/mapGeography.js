const countries = document.querySelectorAll(".country");
const leftMenu1 = document.querySelector("#leftMenu[data-mode='settings']");
const leftMenu2 = document.querySelector("#leftMenu2[data-mode='tests']");
const mapContainer = document.getElementById("mapCont");
const switches = document.querySelectorAll(".left-menu-list--switch");
const dropdown = document.getElementById("dropdown");

const mode = localStorage.getItem("mode");

const tool3 = document.getElementById("tooltip3");

function setGlobalInformation(leng, snap) {
  for (var i = 0; i < leng; i++) {
    var temp_id = countries[i].dataset.idofthecountry;
    countries[i].dataset.title = snap.val()[temp_id][0];
    countries[i].setAttribute("name", snap.val()[temp_id][0]);
    countries[i].dataset.capital = snap.val()[temp_id][1];
    if (snap.val()[temp_id][2]) {
      countries[i].dataset.internationalorganizations = snap.val()[temp_id][2];
    }
  }
}

function setInformationAboutGeography(snap) {
  for (var j = 0; j < snap.val().length; j++) {
    let jSpan = document.createElement("span");
    jSpan.className = "dropdown-point";
    jSpan.dataset.internationalorganization = j;
    jSpan.innerText = snap.val()[j];
    jSpan.addEventListener("click", function (e) {
      dropdown.classList = "dropdown";
      dropdown.querySelector(".dropdown-title").innerText = e.target.textContent;
      dropdown.querySelector(".dropdown-title").dataset.internationalorganization = e.target.dataset.internationalorganization;
    });
    dropdown.querySelector(".dropdown-content").appendChild(jSpan);
    //console.log(snap.val()[1][j])
  }
}

if (sessionStorage.getItem("user")) {
  document.querySelector(".button-container#buttonSignIn").classList = "button-container";
  document.querySelector(".button-container#buttonSignOut").classList = "button-container active";
  document.querySelector(".button-container#buttonCabinet").classList = "button-container active";
  document.querySelector("#leftMenu2[data-mode='tests'] .left-menu-authorization[data-auth='true']").className = "left-menu-authorization active";
} else {
  document.querySelector("#leftMenu2[data-mode='tests'] .left-menu-authorization[data-auth='false']").className = "left-menu-authorization active";
}

if (sessionStorage.getItem("leftMenu2")) {
  document.getElementById("leftMenu").className = "left-menu-container disactive";
  document.getElementById("leftMenu2").className = "left-menu-container active";
  sessionStorage.removeItem("leftMenu2");
}
// countries.forEach((country) => {
//     country.addEventListener("click", function () {
//         var titleOfTheCntr = this.dataset.title;
//         console.log(this.dataset.title);
//         // if (header_nav.className == "header__nav geography") {
//         //     console.log(
//         //         chooseLanguageCode +
//         //         "/InformationAboutTheGeographyOfCountries/Countries/" +
//         //         titleOfTheCntr
//         //     );
//         //     get(
//         //         child(
//         //             databaseRef,
//         //             chooseLanguageCode +
//         //             "/InformationAboutTheGeographyOfCountries/Countries/" +
//         //             titleOfTheCntr
//         //         )
//         //     )
//         //         .then((snapshot) => {
//         //             infoAboutCountry = snapshot.val();
//         //             console.log(infoAboutCountry);
//         //             informationAboutTheCountry(infoAboutCountry);
//         //             fadeInPopUp(this);
//         //         })
//         //         .catch((error) => {
//         //             alert(
//         //                 "Something was wrong with downloading information about the country. Please, reload the page (F5)"
//         //             );
//         //         });
//         // }
//         // if (header_nav.className == "header__nav studies") {
//         //     var tempNameOfTheCntr = this.dataset.title;
//         //     informationAboutTheUniversities(
//         //         infoAboutUniversities.Countries[tempNameOfTheCntr]
//         //     );
//         // }
//     });
// });

switches.forEach((swtch) => {
  swtch.addEventListener("click", function () {
    if (swtch.classList == "left-menu-list--switch") {
      swtch.classList = "left-menu-list--switch active";
      if (swtch.dataset.type == "country") {
        tool1.querySelector(".tooltip-country").dataset.stage = "1";
      } else if (swtch.dataset.type == "capital") {
        tool1.querySelector(".tooltip-capital").dataset.stage = "1";
      } else if (swtch.dataset.type == "internationalOrganizations") {
        countries.forEach((country) => {
          if (country.dataset.internationalorganizations.includes(dropdown.querySelector(".dropdown-title").dataset.internationalorganization)) {
            country.classList += " inter";
          }
        });
      }
    } else if (swtch.classList == "left-menu-list--switch active") {
      swtch.classList = "left-menu-list--switch";
      if (swtch.dataset.type == "country") {
        tool1.querySelector(".tooltip-country").dataset.stage = "0";
      } else if (swtch.dataset.type == "capital") {
        tool1.querySelector(".tooltip-capital").dataset.stage = "0";
      } else if (swtch.dataset.type == "internationalOrganizations") {
        countries.forEach((country) => {
          if (country.classList == "country inter") {
            country.classList = "country";
          }
          if (country.classList == "country t20 inter") {
            country.classList = "country t20";
          }
        });
      }
    }
  });
});

// dropdown.querySelector(".dropdown-title").addEventListener("click", function () {
//     if (dropdown.classList == "dropdown active") {
//         dropdown.classList = "dropdown"
//     } else if (dropdown.classList == "dropdown") {
//         dropdown.classList = "dropdown active"
//     }
// })

console.log(mapContainer);

leftMenu1.querySelector(".left-menu-button").addEventListener("click", () => {
  if (leftMenu1.classList == "left-menu-container active") {
    leftMenu1.classList = "left-menu-container";
    leftMenu2.classList = "left-menu-container";
    mapContainer.querySelector(".svg-container svg").style.padding = "100px";
  } else if (leftMenu1.classList == "left-menu-container") {
    leftMenu1.classList = "left-menu-container active";
    leftMenu2.classList = "left-menu-container disactive";
    mapContainer.querySelector(".svg-container svg").style.paddingLeft = "450px";
  }
});

leftMenu1.querySelector(".left-menu-button").addEventListener("mouseenter", () => {
  tool2.style.display = "block";
  tool2.querySelector("[data-mode='settings']").style.display = "block";
});

leftMenu1.querySelector(".left-menu-button").addEventListener("mousemove", function (e) {
  tool2.style.top = getBodyScrollTop() + 15 + e.y + "px";
  tool2.style.left = 15 + e.x + "px";
});

leftMenu1.querySelector(".left-menu-button").addEventListener("mouseleave", () => {
  tool2.style.display = "none";
  tool2.querySelector("[data-mode='settings']").style.display = "none";
});

leftMenu2.querySelector(".left-menu-button").addEventListener("mouseenter", () => {
  tool2.style.display = "block";
  tool2.querySelector("[data-mode='tests']").style.display = "block";
});

leftMenu2.querySelector(".left-menu-button").addEventListener("mousemove", function (e) {
  tool2.style.top = getBodyScrollTop() + 15 + e.y + "px";
  tool2.style.left = 15 + e.x + "px";
});

leftMenu2.querySelector(".left-menu-button").addEventListener("mouseleave", () => {
  tool2.style.display = "none";
  tool2.querySelector("[data-mode='tests']").style.display = "none";
});

leftMenu2.querySelector(".left-menu-button").addEventListener("click", () => {
  if (leftMenu2.classList == "left-menu-container active") {
    leftMenu1.classList = "left-menu-container";
    leftMenu2.classList = "left-menu-container";
    mapContainer.querySelector(".svg-container svg").style.padding = "100px";
  } else if (leftMenu2.classList == "left-menu-container") {
    leftMenu1.classList = "left-menu-container disactive";
    leftMenu2.classList = "left-menu-container active";
    mapContainer.querySelector(".svg-container svg").style.paddingLeft = "450px";
  }
  leftMenu2
    .querySelector(".left-menu-tests")
    .setAttribute(
      "style",
      "height: calc(" +
        document.getElementById("mapContainer").offsetHeight +
        "px - " +
        leftMenu2.querySelector(".left-menu-title").offsetHeight +
        "px - " +
        leftMenu2.querySelector(".left-menu-authorization.active").offsetHeight +
        "px)"
    );
});

// mapContainer.querySelector('.left-menu-activated-mode').innerText = mode;
