import throttle from "lodash.throttle";
import "../css/common.css";
import "../css/feedback-form.css";

const STORAGE_KEY = "feedback-msg";

const refs = {
	form: document.querySelector(".js-feedback-form"),
	textarea: document.querySelector(".js-feedback-form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 3000));
/* 
--- Останавливаем собітие по умолчанию

--- Убираем сообщение из хранилища

--- Очищаем форму
*/

populateTextarea();

function onFormSubmit(evt) {
	evt.preventDefault();
	console.log("Sended form");
	evt.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
}

/* 
--- Получаем значение поля

--- Сохраняем его в хранилище

--- Можно добавить trottle
*/

function onTextareaInput(evt) {
	const message = evt.currentTarget.value;

	localStorage.setItem(STORAGE_KEY, message);
}

/* 
--- Получаем сообщение из хранилища

--- Если что-то есть, обновляем ДОМ
*/

function populateTextarea() {
	const savedMessage = localStorage.getItem(STORAGE_KEY);

	if (savedMessage) {
		console.log(savedMessage);
		refs.textarea.value = savedMessage;
	}
}
