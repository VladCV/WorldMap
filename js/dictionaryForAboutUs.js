const dictionaryForAboutUs = [
    ["Про платформу"],
    ["<span>Explore the World</span> - навчальна платформа з вивчення предмета “Географія” зі шкільної програми (1 курс)."],
    ["<span>На даний момент</span> ця платформа знаходиться на стадії розробки, але певний функціонал вже є. Доступне проходження тестів на знання країн та їхніх столиць, міжнародних організацій та їхніх країн-учасниць."],
    ["<span>Ми працюємо</span> над удосконаленням наявного функціоналу та додаванням розділу для вивчення історії: вивчення причин/наслідків Першої світової війни, Другої світової війни та інших історичних подій."],
    ["Якщо Ви <span>front-end розробник, back-end розробник, web дизайнер, копірайтер</span> та бажаєте мати великий проєкт для портфоліо – запрошуємо Вас приєднатися до нашої команди."],
    ["Ім'я Прізвище:"],
    ["Сфера діяльності:"],
    ["Пошта:"],
    ["Хочу приєднатися до команди"]
]

const wayToAboutUs = document.getElementById("aboutUsContainer");

wayToAboutUs.querySelector(".about-us-title").innerText = dictionaryForAboutUs[0][languageId]

let ea = 1;
wayToAboutUs.querySelectorAll(".about-us-info").forEach((e) => {
    e.innerHTML = dictionaryForAboutUs[ea][languageId];
    ea++;
})

wayToAboutUs.querySelector(".about-us-invite-info").innerHTML = dictionaryForAboutUs[4][languageId];

let eb = 5
wayToAboutUs.querySelectorAll(".about-us-invite-text").forEach((e) => {
    e.innerText = dictionaryForAboutUs[eb][languageId]
    eb++;
})

wayToAboutUs.querySelector(".about-us-invite-button").innerHTML = dictionaryForAboutUs[8][languageId]