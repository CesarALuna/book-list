/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */

const library = [];

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function addBookToLibrary(title, author, isbn) {
  const newBook = new Book(title, author, isbn);
  library.push(newBook);
}

function displayBooks(library) {
  const list = document.querySelector("#book-list");
  let books = "";

  // loop through each book in the library
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    books += `
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>  
        <td><a href='#'><i class="fa-regular fa-trash-can"></i></a></td>
        </tr>
    `;
  }
  list.innerHTML = books;
}

// invoke function
displayBooks(library);

// clear fields
function clearFields() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
}

// add a new book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // cache form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validate
  if (title === "" || author === "" || isbn === "") {
    alert("Please complete all fields");
  } else {
    addBookToLibrary(title, author, isbn);
  }
  displayBooks(library);
  clearFields();
});
