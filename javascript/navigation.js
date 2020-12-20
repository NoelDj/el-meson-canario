/*Creating the header and footer inside a js files, helps me save time.
So I dont have to change the markup in each single html file.
I can just adjust the markup from this js file.*/

/*header*/
const header = document.querySelector('header');
header.innerHTML = `
        <nav class="main-nav">
            <div class="logo"><a href="index.html"><img src="images/logo.svg" alt=""></a></div>
            <section class="links">
                <a href="menu.html">Menu</a>
                <a href="catering.html">Catering</a>
                <a href="takeaway.html">Take away</a>
                <a href="contact.html">Contact</a>
                <a href="about.html">Om os</a>
                <a href="gallery.html">Galleri</a>
                <a href="offers.html">Tilbud</a>
                <a href="events.html">Events</a>
                <div class="btn">
                    <img src="images/icons/burger-menu.svg" alt="burger menu">
                </div>
            </section>

        </nav>
`;

/*footer*/
const footer = document.querySelector('footer');
footer.innerHTML = `
        <section class="upper-footer">

            <div class="hours">
                <h3 class="footer-heading">Åbningstider</h3>
                <ul>
                    <li>Alle dage</li>
                    <li>15 - 22</li>
                </ul>
            </div>

            <div class="contact">
                <h3 class="footer-heading">Kontakt</h3>
                <ul>
                    <li>+45 50 53 91 38</li>
                    <li>Mail: xjuan8@hotmail.com</li>
                </ul>
            </div>

            <nav class="sitemap">
                <h3 class="footer-heading">Sitemap</h3>
                <ul>
                    <li><a href="#">Catering</a></li>
                    <li><a href="#">Take Away</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">Om os</a></li>
                    <li><a href="#">Begivenheder</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Forside</a></li>
                </ul>
            </nav>

            <div class="some">
                <h3 class="footer-heading">Følg os på</h3>
                <div class="icon">
                <a href="https://www.facebook.com/GastronomiskTapasBureauELMESONCANARIO"><i class="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/juanrecinosjensen/"><i class="fab fa-instagram-square"></i></a>
                <a href="https://www.youtube.com/channel/UCAglUoCIaEUGVFSeWV6qRAw"><i class="fab fa-youtube-square"></i></a>
                </div>
            </div>

            <div class="about">
                <h3 class="footer-heading">Om os</h3>
                <p>Med alle vores traditionelle, autentiske og ægte spanske PAELLAS, TINTOS, TAPAS og SANGRIA, har vi noget til enhver smag.</p>
            </div>

        </section>

        <section class="middle-footer">

            <div class="gallery">
                <h3 class="footer-heading">Gallery</h3>
                <img src="images/stock/tapas-restaurant-el-meson-canario%20(1).jpg" alt="">
                <img src="images/stock/tapas-restaurant-el-meson-canario%20(2).jpg" alt="">
                <img src="images/stock/tapas-restaurant-el-meson-canario%20(3).jpg" alt="">
                <img src="images/stock/tapas-restaurant-el-meson-canario%20(7).jpg" alt="">
                <img src="images/stock/tapas-restaurant-el-meson-canario%20(5).jpg" alt="">
                <img src="images/stock/tapas-restaurant-el-meson-canario%20(6).jpg" alt="">
            </div>

            <div class="location">
                <h3 class="footer-heading">Find os her</h3>
                <h4>Rågeleje Strandvej 93, 3210 Vejby</h4>
                <img src="images/map.PNG" alt="a map" class="map" height="300px">
            </div>

        </section>


        <section class="buttom-footer">
            <strong>El Meson Canario - 2020</strong>
        </section>
`;
