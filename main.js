const one = document.querySelector('.one');
const two = document.querySelector('.two');
const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
let celsius;

//T(°F) = T(°C) * 1.8 + 32
//T(°C) = (T(°F) - 32) / 1.8

const swapLabel = () => {
	celsius = one.textContent;
	one.textContent = two.textContent;
	two.textContent = celsius;
};

const toFahrenheit = () => {
	if (converter.value == '') return;
	result.textContent = `${converter.value}°C is ${(
		converter.value * 1.8 +
		32
	).toFixed(1)}°F.`;
};

const toCelsius = () => {
	if (converter.value == '') return;
	result.textContent = `${converter.value}°F is ${(
		(converter.value - 32) /
		1.8
	).toFixed(1)}°C.`;
};

const convertDegrees = () => {
	if (one.textContent == '°C' && two.textContent == '°F') {
		toFahrenheit();
	} else if (one.textContent == '°F' && two.textContent == '°C') {
		toCelsius();
	}
};

const resetResult = () => {
	result.textContent = '';
	converter.value = '';
};

changeBtn.addEventListener('click', swapLabel);
resetBtn.addEventListener('click', resetResult);
convBtn.addEventListener('click', convertDegrees);
