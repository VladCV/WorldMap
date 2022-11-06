let languageId, languageCode;

console.log("wdadwda")

function toIndex() {
    document.location.href = "../index.html";
}

body = document.getElementById('body')

if(document.getElementById("button-signOut")) {
    document.getElementById("button-signOut").addEventListener("click", () => {
        sessionStorage.removeItem("user");
        document.location.href = "index.html";
    });
}


if (body.dataset.page != "index" && body.dataset.page != "selectedTest") {
    document.querySelector('.header').classList += ' bg'
    document.querySelectorAll('.list-point-link').forEach((e) => {
        e.classList = "list-point-link"
    })
}

if (localStorage.getItem("languageId")) {
    languageId = localStorage.getItem("languageId");
    languageCode = localStorage.getItem("languageCode");
} else {
    languageId = 0;
    languageCode = "ua";
    localStorage.setItem("languageId", languageId)
    localStorage.setItem("languageCode", languageCode)
}

console.log("awdwad languageId = " + languageId)
