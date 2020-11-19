
"use strict";

function Book(titel, gener, sidor, isbn) {
  this.titel = titel;
  this.gener = gener;
  this.sidor = sidor;
  this.isbn = isbn;

  this.getBookInfo = function () {
    return console.log(
      "Bok: " +
        this.titel +
        "\nÄmne: " +
        this.gener+
        "\nSidor: " +
        this.sidor +
        "\nISBN: " +
        this.isbn +
        "\n-----"
    );
  };
}

let books = [];

books.push(new Book("Guldkompassen", "Fantasy", 459, "978-91-27-09981-4"));
books.push(new Book("Den Skarpa Eggen", "Fantasy", 589, "978-91-27-09980-7"));
books.push(new Book("Bärnstenskikaren", "Fantasy", 672, "978-91-27-11601-6"));
{
  let laggTillBok = prompt("Titel: ");
  let laggTillGener = prompt("Gener: ");
  let laggTillSidor = prompt("Antal sidor: ");
  let laggTillIsbn = prompt("ISBN Nummer: ");
  books.push(new Book(laggTillBok, laggTillGener, laggTillSidor, laggTillIsbn));
}

books.forEach(function (e) {
  e.getBookInfo();
});
