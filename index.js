let yearOfBirth = +prompt('Привіт користувач, який у тебе рік народження?');
let city = prompt('У якому місті ти живеш?');
let sport = prompt('Який твій улюблений вид спорту?'); 

if (yearOfBirth === null || yearOfBirth === 0) {
	yearOfBirth = 'Ви не вказали свій рік народження.'
} else {
	yearOfBirth = 'Тобі ' + (2022 - yearOfBirth) + ' років.';
}

if (city === 'Київ') {
	city = 'Ти живеш у столиці України.';
} else if (city === 'Вашингтон') {
	city = 'Ти живеш у столиці США.';
} else if (city === 'Лондон') {
	city = 'Ти живеш у столиці Великобританії.';
} else if (city === null || city === '') {
	city = 'Шкода, що ви не захотіли вводити своє місто.'
} else {
	city = 'Ти живеш у місті ' + city + '.';
}

if (sport === 'Футбол') {
	sport = 'Ти хочешь стати Кріштіану Роналду?';
} else if (sport === 'Баскетбол') {
	sport = 'Ти хочешь стати Майклом Джорданом?';
} else if (sport === 'Бокс') {
	sport = 'Ти хочешь стати Олександром Усиком?';
} else if (sport === null || sport === '') {
	sport = 'Шкода, що ви не захотіли вводити свій улюбленний вид спорту.'
} else {
	sport = 'Тобі подобається ' + sport + '.';
}

alert(yearOfBirth + city + sport);