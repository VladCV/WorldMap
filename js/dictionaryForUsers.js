const dictionaryForUsers = [
    ["Користувачі"],
    ["<span>Explore the World</span> на даний момент поділяє два види користувачів: неавторизовані та авторизовані."],
    ["<span>Неавторизовані користувачі</span> мають доступ до проходження тестів. Ви можете навчатися, дізнаватися нову інформацію про країни, їх столиці та їх адміністративні одиниці"],
    ["<span>Авторизовані користувачі</span> мають можливість також проходити тести але з єдиним плюсом. Усі Ваші тести зберігаються у вашому особистому кабінеті. Ви можете будь-коли переглянути свої результати."],
    ["<span>Ми працюємо</span> над удосконаленням наявного функціоналу та над створенням нових можливостей з географії та інших предметів, пов'язаних із всесвітньою картою. Також планується додати ролі вчителя та учня. Вчителі матимуть можливість створювати тести та призначати їх для проходження учням. Потім бачитимуть результати, статистику тощо."],
    ["Якщо Ви <span>front-end розробник, back-end розробник, web дизайнер, копірайтер</span> та бажаєте мати великий проєкт для портфоліо – запрошуємо Вас приєднатися до нашої команди."],
    ["Ім'я Прізвище:"],
    ["Сфера діяльності:"],
    ["Пошта:"],
    ["Хочу приєднатися до команди"]
]

const wayToUsers = document.getElementById("usersContainer");

wayToUsers.querySelector(".users-title").innerText = dictionaryForUsers[0][languageId]

let fb = 1;
wayToUsers.querySelectorAll(".users-info").forEach((e) => {
    e.innerHTML = dictionaryForUsers[fb][languageId];
    fb++;
})

wayToUsers.querySelector(".users-invite-info").innerHTML = dictionaryForUsers[5][languageId]

let fc = 6
wayToUsers.querySelectorAll(".users-invite-text").forEach((e) => {
    e.innerText = dictionaryForUsers[fc][languageId];
    fc++;
})

wayToUsers.querySelector(".users-invite-button").innerText = dictionaryForUsers[9][languageId]