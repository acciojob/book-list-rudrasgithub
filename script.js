//your JS code here. If required.
const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("isbn")

function AddBook() {
	event.preventDefault();
	const book_list = document.querySelector("#book-list")
	const row = document.createElement("tr")
	
	const title_cell = document.createElement("td")
	const author_cell = document.createElement("td")
	const isbn_cell = document.createElement("td")
	
	title_cell.textContent = title.value;
	author_cell.textContent = author.value;
	isbn_cell.textContent = isbn.value;
		
	row.appendChild(title_cell)
	row.appendChild(author_cell)
	row.appendChild(isbn_cell)
	
	book_list.appendChild(row)
}

document.getElementById("submit").addEventListener("click", AddBook)