const dictionaryForAboutUs = [
    ["Про сайт", "About the site"],
    ["<span>Explore the World</span> - навчальний сайт з вивчення предмета “Географія” зі шкільної програми (1 курс).", "<span>Explore the World</span> - an educational site for studying the subject 'Geography' from the school curriculum (1st year)."],
    ["<span>На даний момент</span> ця платформа знаходиться на стадії розробки, але певний функціонал вже є. Доступне проходження тестів на знання країн та їхніх столиць, міжнародних організацій та їхніх країн-учасниць.", "<span>Currently</span> this platform is under development, but some functionality is already available. Tests on knowledge of countries and their capitals, international organizations and their member countries are available."],
    ["<span>Ми працюємо</span> над удосконаленням наявного функціоналу та додаванням розділу для вивчення історії: вивчення причин/наслідків Першої світової війни, Другої світової війни та інших історичних подій.", "<span>We are working</span> on improving the existing functionality and adding a section for studying history: studying the causes/effects of World War I, World War II and other historical events."],
    ["Якщо Ви <span>front-end розробник, back-end розробник, web дизайнер, копірайтер</span> та бажаєте мати великий проєкт для портфоліо – запрошуємо Вас приєднатися до нашої команди.", "If you are a <span>front-end developer, back-end developer, web designer, copywriter</span> and want to have a big project for your portfolio - we invite you to join our team."],
    ["Ім'я Прізвище:", "Name"],
    ["Сфера діяльності:", "Field of activity:"],
    ["Пошта:", "Mail:"],
    ["Хочу приєднатися до команди", "I want to join the team"]
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