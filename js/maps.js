countries.forEach((country) => {
    country.addEventListener("mouseenter", function () {
        document.getElementsByName(this.dataset.title).forEach((e) => {
            if (e.classList == "country t20") {
                e.setAttribute("class", "country t20 hover");
            }
            if (e.classList == "country") {
                e.setAttribute("class", "country hover");
            }
            if (e.classList == "country t20 inter") {
                e.setAttribute("class", "country t20 inter hover");
            }
            if (e.classList == "country inter") {
                e.setAttribute("class", "country inter hover");
            }
        });
        tool1.getElementsByClassName("country-name")[0].innerText =
            this.dataset.title;
        tool1.getElementsByClassName("capital-name")[0].innerText =
            this.dataset.capital;
        tool1.getElementsByClassName("tooltip-capital")[0].style.display =
            "block";
        tool1.getElementsByClassName("tooltip-country")[0].style.display =
            "block";
        if (
            tool1.getElementsByClassName("tooltip-country")[0].dataset.stage ==
            "0"
        ) {
            tool1.getElementsByClassName("tooltip-country")[0].style.display =
                "none";
            tool1.style.display = "none";
        }
        if (
            tool1.getElementsByClassName("tooltip-capital")[0].dataset.stage ==
            "0"
        ) {
            tool1.getElementsByClassName("tooltip-capital")[0].style.display =
                "none";
            tool1.style.display = "none";
        }
        if (
            tool1.getElementsByClassName("tooltip-country")[0].dataset.stage ==
            "1"
        ) {
            tool1.getElementsByClassName("tooltip-country")[0].style.display =
                "block";
            tool1.style.display = "block";
        }
        if (
            tool1.getElementsByClassName("tooltip-capital")[0].dataset.stage ==
            "1"
        ) {
            tool1.getElementsByClassName("tooltip-capital")[0].style.display =
                "block";
            tool1.style.display = "block";
        }
    });
    country.addEventListener("mousemove", function (e) {
        tool1.style.top = getBodyScrollTop() + 15 + e.y + "px";
        tool1.style.left = 15 + e.x + "px";
    });
    country.addEventListener("mouseleave", function () {
        tool1.style.display = "none";
        countries.forEach((e) => {
            if (e.classList == "country t20 hover") {
                e.setAttribute("class", "country t20");
            }
            if (e.classList == "country hover") {
                e.setAttribute("class", "country");
            }
            if (e.classList == "country t20 inter hover") {
                e.setAttribute("class", "country t20 inter");
            }
            if (e.classList == "country inter hover") {
                e.setAttribute("class", "country inter");
            }
        });
    });
});

document.addEventListener("load", (e) => {
    console.log("start")
})

document.querySelectorAll(".left-menu-test-button").forEach((e) => {
    e.addEventListener("click", () => {
        if (document.querySelector("#popupTestsInMap .popup-content[data-test=" + e.dataset.test + "]")) {
            document.getElementById("popupTestsInMap").classList = "popup-container active";
            document.querySelector("#popupTestsInMap .popup-content[data-test=" + e.dataset.test + "]").classList += " active";
            document.querySelector("#popupTestsInMap .popup-content[data-test=" + e.dataset.test + "] .popup-body[data-teststage='1']").classList += " active"
            document.getElementById("body").classList += "popup-active";
        }

    })
})

document.getElementById("popupTestsInMap").addEventListener("click", (e) => {
    if (e.target.className == "popup-bg" || e.target.className == "popup-close") {
        document.querySelector("#popupTestsInMap").querySelectorAll(" .active").forEach((e) => {
            console.log(e.classList)
            document.querySelector("#popupTestsInMap").querySelector("." + e.classList[0] + ".active").className = e.classList[0]
            console.log(e.classList)
        })
        document.getElementById("popupTestsInMap").className = "popup-container";
        document.getElementById("body").className = "";
    }
})
