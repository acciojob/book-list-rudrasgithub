//your JS code here. If required.
const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("isbn")
const book_list = document.getElementById("book-list")
const form = document.getElementById("book-form")

form.addEventListener("submit", (event) => {
	event.preventDefault();
	
	const row = document.createElement("tr")

	row.innerHTML = `
		<td>${title.value}</td>
		<td>${author.value}</td>
		<td>${isbn.value}</td>
		<td><button class="delete" style="background-color:red;cursor:pointer;color:white;border:none">X</button></td>
	`
	row.id = "center"
	row.style.cssText = "background-color:grey;opacity:0.4;border:none;"
	book_list.appendChild(row)
	form.reset()
})

book_list.addEventListener("click", (event) => {
	if(event.target.classList.contains("delete")) {
		event.target.closest("tr").remove()
	}
})