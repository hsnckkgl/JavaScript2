function bookList(){
const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
      src: "https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png"
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: false,
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"
    },
    {
      title: 'Angels & Demons',
      author: 'Dan Brown',
      alreadyRead: true,
      src: "https://covers.openlibrary.org/w/id/8398165-L.jpg"
      }
  ];
    var paragraf = document.createElement("p");
    
    for (let i=0; i<books.length; i++) {
      let ulist = document.createElement("ul");
      let titleli = document.createElement("li");
      let authorli = document.createElement("li");
      let readli = document.createElement("li");
      let bookimg = document.createElement("img");
      
      document.body.appendChild(ulist);

      let title = document.createTextNode(books[i].title);
      let author = document.createTextNode(books[i].author);
      let alreadyRead = document.createTextNode("Already Read: " + books[i].alreadyRead);

        titleli.appendChild(title);
        ulist.appendChild(titleli);

        authorli.appendChild(author);
        ulist.appendChild(authorli);

  
        readli.appendChild(alreadyRead);
        ulist.appendChild(readli);

        bookimg.src = books[i].src;
        ulist.appendChild(bookimg);

        bookimg.style.height = "300px";
    }
      
  }
  bookList();
  