// console.log("Hello");

const tech = [
	{ label: "HTML" },
	{ label: "CSS" },
	{ label: "JS" },
	{ label: "Node" },
	{ label: "React" },
	{ label: "Vue" },
	{ label: "Redux" },
	{ label: "React Router" },
	{ label: "MongoDB" },
];

const refs = {
	list: document.querySelector(".js-list"),
	input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", _.debounce(onFilterChange, 300));
const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
	return items.map(item => `<li>${item.label}</li>`).join("");
}

function onFilterChange(evt) {
	const filter = evt.target.value;
	const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

	const listItemsMarkup = createListItemsMarkup(filteredItems);
	populateList(listItemsMarkup);
}

function populateList(markap) {
	refs.list.innerHTML = markap;
}
