console.log("Hello");

const handlInput = document.querySelector(".js-input-first");
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// targetBtn.addEventListener("click", logMessage);

function logMessage() {
	console.log("click target button");
}

// handlInput.addEventListener("input", handleCurrentTargetInput);

function handleCurrentTargetInput(e) {
	console.log(handlInput.value);
	console.log(e);
}

addListenerBtn.addEventListener("click", () => {
	console.log("Added listener target button");
	targetBtn.addEventListener("click", logMessage);
	handlInput.addEventListener("input", handleCurrentTargetInput);
});

removeListenerBtn.addEventListener("click", () => {
	console.log("Remove listener target button");
	targetBtn.removeEventListener("click", logMessage);
	handlInput.removeEventListener("input", handleCurrentTargetInput);
});

// --------------- Register form ----------------

const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	// const formElements = event.currentTarget.elements;

	// console.dir(formElements);

	// const email = formElements.email.value;
	// const password = formElements.password.value;
	// const subscription = formElements.subscription.value;

	// console.log(email, password, subscription);

	const formData = new FormData(event.currentTarget);
	formData.forEach((value, name) => {
		// console.log("onFormSubmit -> value", value);
		// console.log("onFormSubmit -> name", name);
	});
}

// ------------- Input events ------------

const refs = {
	input: document.querySelector(".js-input"),
	licenseCheckbox: document.querySelector(".js-license"),
	btn: document.querySelector(".js-button"),
	nameLabel: document.querySelector(".js-button > span"),
};

// const input = document.querySelector(".js-input");
// const license = document.querySelector(".js-license");
// const btn = document.querySelector(".js-button");
// const nameLabel = document.querySelector(".js-button > span");

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("change", onInputChange);

refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus() {
	console.log("Focus event on input");
}

function onInputBlur() {
	console.log("abort focus on input");
}

function onInputChange(event) {
	// console.log(event.currentTarget.value);
	refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
	console.log(event.currentTarget.checked);
	refs.btn.disabled = !event.currentTarget.checked;
}
