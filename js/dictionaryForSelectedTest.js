const dictionaryForSelectedTest = [[""]];

const dictionaryForContinueOfGeographyTest1 = [["Правильних відповідей: "], ["Завершити тестування"], [""]];

const wayToActivatedTest = document.querySelector(".activated-test[data-test='g1']");

console.log(wayToActivatedTest.childNodes[5]);

wayToActivatedTest.childNodes[3].childNodes[0].innerText = dictionaryForContinueOfGeographyTest1[0][languageId];
wayToActivatedTest.childNodes[3].childNodes[1].innerText = 0;
wayToActivatedTest.childNodes[5].innerText = dictionaryForContinueOfGeographyTest1[1][languageId];
