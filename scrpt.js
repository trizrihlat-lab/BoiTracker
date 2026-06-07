const container = document.getElementById("bookContainer");

function renderBooks(data){

  container.innerHTML="";

  data.forEach(book=>{

    container.innerHTML += `
      <div class="book-card">

        <img src="${book.image}" alt="${book.title}">

        <h3>${book.title}</h3>

        <p>${book.author}</p>

        <p>৳${book.price}</p>

        <a
          href="${book.affiliate}"
          class="buy-btn"
          target="_blank"
        >
          Buy Now
        </a>

      </div>
    `;
  });
}

renderBooks(books);

document
.getElementById("searchInput")
.addEventListener("input",(e)=>{

  const value =
  e.target.value.toLowerCase();

  const filtered =
  books.filter(book=>
    book.title
    .toLowerCase()
    .includes(value)
  );

  renderBooks(filtered);
});
