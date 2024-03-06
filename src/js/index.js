import products from "./data/products.js";
import transactionHistory from "./data/transactions.js";

// const product = {
// 	name: "Servoprivod",
// 	description:
// 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos expedita sint facilis earum cupiditate ratione, saepe adipisci molestiae vitae dolor nisi quam sed officia excepturi dignissimos atque quidem dolorem.",
// 	price: "2000",
// 	avaliable: "true",
// 	onSale: "true",
// };

const productContainerEl = document.querySelector(".js-products");

const makeProductCard = ({ name, description, price }) => {
	const productEl = document.createElement("article");
	productEl.classList.add("product");

	const titleEl = document.createElement("h2");
	titleEl.classList.add("product__name");
	titleEl.textContent = name;

	const descrEl = document.createElement("p");
	descrEl.classList.add("product__descr");
	descrEl.textContent = description;

	const priceEl = document.createElement("p");
	priceEl.classList.add("product__price");
	priceEl.textContent = `Tscena: ${price} deneg`;

	productEl.append(titleEl, descrEl, priceEl);

	return productEl;
};

// console.log(makeProductCard(products[0]));

const elements = products.map(makeProductCard);

productContainerEl.append(...elements);

//Table transaction History

{
	/*  <td>ID transran</td>
		<td>Total</td>
		<td>Date</td>
		<td>Who</td>
		<td>Type transaction</td>
		<td>Name account</td>
		<td>Account number</td> */
}

const makeTransactionTableRowMarkup = transaction => {
	const { id, amount, date, name, type, business, account } = transaction;

	return `
	<tr>
		<td>${id}</td>
		<td>${amount}</td>
		<td>${date}</td>
		<td>${business}</td>
		<td>${type}</td>
		<td>${name}</td>
		<td>${account}</td>
	</tr>
	`;
};

const tableEl = document.querySelector(".js-transaction-table");

const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join("");

// console.log(makeTransactionTableRows);
tableEl.insertAdjacentHTML("beforeend", makeTransactionTableRows);
