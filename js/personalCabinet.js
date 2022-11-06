const informationAboutThePerson = JSON.parse(sessionStorage.getItem("user"))
console.log(informationAboutThePerson)

const wayToPersonalCabinet = document.getElementById("personalCabinet");
const popupInputsWithDatalist = document.querySelectorAll(".input-datalist");
const popupDatalistCountries = document.getElementById("input-countries")

wayToPersonalCabinet.querySelector(".personal-cabinet-photo").src = informationAboutThePerson["photoURL"];
wayToPersonalCabinet.querySelector(".personal-cabinet-name").innerText = informationAboutThePerson["displayName"];

document.getElementById("button-signOut").setAttribute("style", "display:flex");
document.getElementById("button-signIn").setAttribute("style", "display:none");

document.getElementById("continueReg").addEventListener("click", () => {
    document.getElementById("popupContinueReg").classList += " active";
    document.getElementById("body").classList += "popup-active"
})

document.getElementById("popupContinueRegBg").addEventListener("click", (e) => {
    if (e.target.className == "popup-bg" || e.target.className == "popup-close") {
        document.getElementById("popupContinueReg").className = "popup-container";
        document.getElementById("body").className = ""
    }
})

document.querySelectorAll(".popup-body-button").forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList != "disactive") {
            if (e.dataset.mode == "student") {
                document.querySelector(".popup-content[data-stage='1']").classList = "popup-content"
                document.querySelector(".popup-content[data-stage='2']").classList += " active"
            }
            if (e.dataset.mode == "teacher") {
                document.querySelector(".popup-content[data-stage='1']").classList = "popup-content"
                document.querySelector(".popup-content[data-stage='3']").classList += " active"
            }
        }
    })
})

document.querySelectorAll(".popup-back").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector(".popup-content.active").classList = "popup-content"
        document.querySelector(".popup-content[data-stage='1']").classList = "popup-content active"
    })
})







popupInputsWithDatalist.forEach((input) => {
    input.addEventListener("focus", (e) => {
        e.target.style.display = 'block';
        e.target.style.borderRadius = "10px 10px 0 0";
        let list = e.target.dataset.list;
        if (list == "studentCountries") {
            //
        }
    })
    // input.addEventListener("unfocus", (e) => {
    //     console.log(e)
    // })
})

//console.log(popupDatalistCountries)

for (let option of popupDatalistCountries.options) {
    option.onclick = function () {
        input.value = option.value;
        browsers.style.display = 'none';
        input.style.borderRadius = "5px";
    }
}

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