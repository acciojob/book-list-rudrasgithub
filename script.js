//your JS code here. If required.
const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("isbn")
const book_list = document.getElementById("book-list")

function AddBook() {
	event.preventDefault();
	const row = document.createElement("tr")

	row.innerHTML = `
		<td>${title.value}</td>
		<td>${author.value}</td>
		<td>${isbn.value}</td>
		<td><button class="delete" style="background-color:red;cursor:pointer;color:white">X</button></td>
	`
	book_list.appendChild(row)
	title.value = ""
	author.value = ""
	isbn.value = ""
}
function DeleteBook(event) {
	if(event.target.classList.contains("delete")) {
		event.target.closest("tr").remove()
	}
}
document.getElementById("book-list").addEventListener("click", DeleteBook)
document.getElementById("submit").addEventListener("click", AddBook)