console.log(books);

// fetch('C:\web\book-shop\assets\books.json') //path to the file with json data
//     .then(response => {
//         //console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     });


const booksContainer = document.querySelector('.container-books');

books.forEach((book) => {
    const bookEl = document.createElement('div');
    bookEl.classList.add('book-card');

    bookEl.innerHTML += `<div class="book-img">
    <img src="${book.imageLink}" alt="book cover">
</div>
<div class="book-title">
    <h3>${book.title}</h3>
    <h4>By ${book.author}</h4>
    <div class="book-price">
        <img class="book-price-currency" src="../../assets/icons/currency-usd.svg"
            alt="currency usd">
        <p class="book-price-amount">${book.price}</p>

    </div>
    <div class="book-actions">
        <button class="btn_2">Show more</button>
        <button class="btn_1">Add to cart</button>
    </div>
    <div class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${book.description}</p>
        </div>
    </div>
</div>`;
    booksContainer.appendChild(bookEl);
})

const bookCard = document.querySelectorAll('.book-card');

bookCard.forEach((card) => {
    const showBtn = card.querySelector('.btn_2');
    showBtn.addEventListener('click', (e) => {
        const allModalsOpened = document.querySelectorAll('.show');
        const modalContent = card.querySelector('.modal-content');

        allModalsOpened.forEach((modal) => {
            if (modalContent !== modal)
                modal.classList.remove('show');
        })
        modalContent.classList.toggle('show');

        const closeBtn = card.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modalContent.classList.remove('show');
        })
    })
});


