const dictionaryForUsers = [
    ["Користувачі", "Users"],
    ["<span>Explore the World</span> на даний момент поділяє два види користувачів: неавторизовані та авторизовані.", "<span>Explore the World</span> currently has two types of users: unauthorized and authorized."],
    ["<span>Неавторизовані користувачі</span> мають доступ до проходження тестів. Ви можете навчатися, дізнаватися нову інформацію про країни, їх столиці та їх адміністративні одиниці", "<span>Unauthorized users</span> have access to take tests. You can learn, learn new information about countries, their capitals and their administrative units"],
    ["<span>Авторизовані користувачі</span> мають можливість також проходити тести але з єдиним плюсом. Усі Ваші тести зберігаються у вашому особистому кабінеті. Ви можете будь-коли переглянути свої результати.", "<span>Authorized users</span> can also take tests, but with a single plus. All your tests are stored in your personal cabinet. You can view your results at any time."],
    ["<span>Ми працюємо</span> над удосконаленням наявного функціоналу та над створенням нових можливостей з географії та інших предметів, пов'язаних із всесвітньою картою. Також планується додати ролі вчителя та учня. Вчителі матимуть можливість створювати тести та призначати їх для проходження учням. Потім бачитимуть результати, статистику тощо.", "<span>We are working</span> on improving the existing functionality and on creating new features for geography and other subjects related to the world map. It is also planned to add teacher and student roles. Teachers will be able to create tests and assign them to students to take. Then they will see the results, statistics, etc."],
    ["Якщо Ви <span>front-end розробник, back-end розробник, web дизайнер, копірайтер</span> та бажаєте мати великий проєкт для портфоліо – запрошуємо Вас приєднатися до нашої команди.", "If you are a <span>front-end developer, back-end developer, web designer, copywriter</span> and want to have a big project for your portfolio - we invite you to join our team."],
    ["Ім'я Прізвище:", "Name"],
    ["Сфера діяльності:", "Field of activity:"],
    ["Пошта:", "Email"],
    ["Хочу приєднатися до команди", "I want to join the team"]
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