const createFooter = () => {

    const footer = document.createElement('footer');
    footer.innerHTML += `<div class="footer__logo-and-subscribtion">
    <div class="footer__logo">
    <a href="../main/index.html">
        <img src="../../assets/images/book-store-logo.png" alt="Book store logo"></a>
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