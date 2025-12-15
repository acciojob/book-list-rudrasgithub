//your JS code here. If required.
function AddBook() {
	const title = document.getElementById("title")
	const author = document.getElementById("author")
	const isbn = document.getElementById("isbn")
	
	const book_list = document.querySelector("#book-list")
	const row = document.createElement("tr")
	const title_cell = document.createElement("td")
	const author_cell = document.createElement("td")
	const isbn_cell = document.createElement("td")
	
	row.appendChild(title_cell)
	row.appendChild(author_cell)
	row.appendChild(isbn_cell)
	title_cell.textContent = 
}

