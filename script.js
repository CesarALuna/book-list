/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */

const library = [
  { title: "Catcher in the Rye", author: "JD Salinger", isbn: "9780140237498" },
  { title: "Snow Crash", author: "Neal Stephenson", isbn: "9780241629833" },
  { title: "All of You Will Die", author: "Pinkerton", isbn: "69" },
];

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
        </tr>
    `;
  }
  list.innerHTML = books;
}

displayBooks(library);
