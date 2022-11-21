const createHeader = () => {

    const header = document.createElement('header');
    header.innerHTML += `<div class="header-logo">
    <h1>BookStore Online</h1>
    <a href="../main/index.html">
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