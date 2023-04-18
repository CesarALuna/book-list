/* eslint-disable max-classes-per-file */
// function Book(title, author, isbn, hasRead) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.hasRead = hasRead;
// }

class Book {
  constructor(title, author, isbn, hasRead) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.hasRead = hasRead;
  }
}

// function addBookToLibrary(title, author, isbn, hasRead) {
//   const newBook = new Book(title, author, isbn, hasRead);
//   library.push(newBook);
// }

// function displayBooks(library) {
//   const list = document.querySelector("#book-list");
//   let books = "";

//   // loop through each book in the library
//   for (let i = 0; i < library.length; i++) {
//     const book = library[i];
//     const readStatus = book.hasRead ? "fa-square-check" : "";
//     books += `
//         <tr>
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><input type="checkbox" onchange="toggleReadStatus(library[${i}], this)"></td>
//         <td><a href='#'><i class="fa-regular fa-trash-can" onclick="removeBook(${i})" ></i></a></td>
//         </tr>
//     `;
//   }
//   list.innerHTML = books;
// }

// invoke function

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, isbn, hasRead) {
    const newBook = new Book(title, author, isbn, hasRead);
    this.books.push(newBook);
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
  }

  displayBooks() {
    const list = document.querySelector("#book-list");
    let books = "";

    // loop through each book in the library
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      const readStatus = book.hasRead ? "fa-square-check" : "";
      books += `
                <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><input type="checkbox" onchange="toggleReadStatus(library.books[${i}], this)"></td>
          <td><a href='#'><i class="fa-regular fa-trash-can" onclick="library.removeBook(${i})"></i></a></td>
          </tr>
      `;
    }
    list.innerHTML = books;
  }
}

const library = new Library();

library.displayBooks();

// clear fields
function clearFields() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
}

document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    alert("Please complete all fields");
  } else {
    library.addBook(title, author, isbn);
  }
  library.displayBooks(library);
  clearFields();
});

function toggleReadStatus(book) {
  book.hasRead = !book.hasRead;
}
