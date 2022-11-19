console.log(books);

// fetch('C:\web\book-shop\assets\books.json') //path to the file with json data
//     .then(response => {
//         //console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     });


const createHeader = () => {

    const header = document.createElement('header');
    header.innerHTML += `<div class="header-logo">
    <h1>BookStore Online</h1>
    <a href="#">
        <img src="../../assets/images/book-store-logo.png" alt="Book store logo"></a>
</div>
<div class="header-search-and-nav">
    <div class="header-search">
        <input type="text" placeholder="Search">
    </div>
    <nav class="header-nav">
        <ul class="nav-list">
            <li class="nav-list__item active"><a href="#">Popular</a></li>
            <li class="nav-list__item"><a href="#">For you</a></li>
            <li class="nav-list__item"><a href="#">Author</a></li>
            <li class="nav-list__item"><a href="#">Genre</a></li>
        </ul>
    </nav>
</div>
<div class="header-personal">
    <a class="personal-link favourite" href="#">
        <img src="../../assets/icons/heart.svg" alt="favourive icon">
    </a>
    <button class="shopping_btn">
    <a class="personal-link" href="#">
        <img src="../../assets/icons/shopping.svg" alt="shopping bag icon">
    </a></button>
</div>`;

    return header;
}

const createFooter = () => {

    const footer = document.createElement('footer');
    footer.innerHTML += `<div class="footer__logo-and-subscribtion">
    <div class="footer__logo">
        <img src="../../assets/images/book-store-logo.png" alt="logo">
    </div>
    <div class="subsribe-section">
        <h3>Subscribe to our news</h3>
        <input type="email" placeholder="Enter your email" required>
        <button type="submit" class="submit_btn">Submit</button>
    </div>
</div>
<div class="footer__links">
    <div class="social-links">
        <a class="social-link" href="https://www.facebook.com/">
            <div class="social-link__circle">
                <img src="../../assets/icons/facebook.png" alt="facebook">
            </div>
            <p>Facebook</p>
        </a>
        <a class="social-link" href="https://twitter.com/">
            <div class="social-link__circle">
                <img src="../../assets/icons/twitter.png" alt="twitter">
            </div>
            <p>Twitter</p>
        </a>
        <a class="social-link" href="https://www.instagram.com/">
            <div class="social-link__circle">
                <img src="../../assets/icons/instagram.png" alt="instagram">
            </div>
            <p>Instagram</p>
        </a>
        <a class="social-link" href="https://www.youtube.com/">
            <div class="social-link__circle">
                <img src="../../assets/icons/youtube.png" alt="youtube">
            </div>
            <p>YouTube</p>
        </a>
    </div>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-list__item"><a href="#">Top chart</a></li>
            <li class="nav-list__item"><a href="#">For you</a></li>
            <li class="nav-list__item"><a href="#">Author</a></li>
            <li class="nav-list__item"><a href="#">Genre</a></li>
        </ul>
    </nav>
    <div class="copyright">
        <p>©RSSchool 2022</p>
    </div>
</div>
</div>`;
    return footer;
}

const createBookElem = (book, index) => {

    const bookEl = document.createElement('div');
    bookEl.classList.add('book-card');
    bookEl.setAttribute('id', 'book-card-' + (index + 1))

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
        <button class="btn_1" id="${index + 1}">Add to cart</button>
    </div>
    <div class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${book.description}</p>
        </div>
    </div>
</div>`;

    // create popup vvv
    createPopup(bookEl);
    addToCart(bookEl);
    return bookEl;

}

const createPopup = (card) => {
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
}

const createItem = (item) => {

}

const addToCart = (card) => {
    const addButton = card.querySelector('.btn_1');
    addButton.addEventListener('click', (e) => {

        //create cart item
        const itemId = e.target.getAttribute('id');
        const bookItem = document.getElementById('book-card-' + itemId);

        const bookTitle = bookItem.querySelector('.book-title>h3').innerHTML;
        const bookAuthor = bookItem.querySelector('.book-title>h4').innerHTML;
        const bookPrice = bookItem.querySelector('.book-price-amount').innerHTML;
        const bookImg = bookItem.querySelector('.book-img>img').getAttribute('src');

        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML += `<img class="cart-item-img" src="${bookImg}"
        alt="book cover">
    <div class="cart-item-description">
        <h4>${bookTitle}</h4>
        <h5>${bookAuthor}</h5>
        <div class="cart-item-quantity">
            <div class="quantity-counter">
                <button class="remove item_btn">-</button>
                <div class="item-number">
                    <p>1</p>
                </div>
                <button class="add item_btn">+</button>
            </div>
            <div class="cart-item-price">
                <img class="book-price-currency" src="../../assets/icons/currency-usd.svg"
                    alt="currency usd">
                <p class="book-price-amount">${bookPrice}</p>
            </div>
        </div>
    </div>`;

        const deleteBtnEl = document.createElement('div');
        deleteBtnEl.classList.add('cart-item-delete');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete_btn');
        deleteBtn.innerHTML += `<i class="fa fa-trash"></i>`;
        deleteBtnEl.append(deleteBtn);

        item.append(deleteBtnEl);

        // add item to the cart
        const modalCartBody = cartModal.querySelector('.modal-cart-body');
        modalCartBody.append(item);

        //disable button

        e.target.setAttribute('disabled', '');

        //increase total sum
        const totalPrice = document.querySelector('.total-price-amount');
        totalPrice.innerHTML = +totalPrice.innerHTML + +bookPrice;

        //delete items from the cart
        deleteBtn.addEventListener('click', () => {
            e.target.disabled = false;
            item.remove();
            totalPrice.innerHTML = +totalPrice.innerHTML - +bookPrice;
        });

        //increase counter in the cart


    });
}

const showCart = () => {
    const cartBtn = document.querySelector('.shopping');
}

const container = document.createElement('div');
container.classList.add('container-centered');
document.body.append(container);

//create header
container.append(createHeader());

//create main
const mainElement = document.createElement('main');
container.append(mainElement);

//create section
const section = document.createElement('section');
section.classList.add('container-books-section');
mainElement.prepend(section);

//create section header
const sectionHeader = document.createElement('h1');
sectionHeader.classList.add('section-header');
sectionHeader.innerText = 'Popular books';
section.prepend(sectionHeader);

//create section wrapper

const sectionWrapper = document.createElement('div');
sectionWrapper.classList.add('container-books');
section.append(sectionWrapper);

//create document fragment for books
let fragment = new DocumentFragment();

//render books
books.forEach((book, index) => {
    fragment.append(createBookElem(book, index));
})
sectionWrapper.append(fragment);


//create footer
container.append(createFooter());

//create cart

const cartModal = document.createElement('div');
cartModal.classList.add('modal-cart');

cartModal.innerHTML += `<div class="modal-cart-content">
<div class="modal-cart-header">
    <h4 class="modal-title">Shopping Cart</h4>
    <span class="close">&times;</span>
</div>
<div class="modal-cart-body">
</div>
<div class="total-price">
    <p>Total</p>
    <img class="book-price-currency" src="../../assets/icons/currency-usd.svg" alt="currency usd">
    <p class="total-price-amount">0</p>
</div>
<div class="checkout">
    <a href="#"><button class="cart-order_btn">Confirm order</button></a>
</div>
</div>`;

mainElement.prepend(cartModal);





