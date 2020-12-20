fetch('http://quater.org/portfolio/wp-json/wp/v2/dish?per_page=20&_embed')
    .then(response => response.json())
    .then(handleData);

const modal = document.querySelector(".modal-background");

function handleData(data) {
    console.log(data)
    data.forEach(loopDishes)

}

function loopDishes(dish) {
    console.log(dish.title.rendered)

    const template = document.querySelector("#dish-menu").content;
    const copy = template.cloneNode(true);

    copy.querySelector('.dish-name').textContent = dish.title.rendered;
    copy.querySelector('img').src = dish._embedded['wp:featuredmedia'][0].source_url;
    copy.querySelector('article').classList.add(dish.categories[0])

    copy.querySelector("article").addEventListener("click", () => {
        fetch(`http://quater.org/portfolio/wp-json/wp/v2/dish/${dish.id}?_embed`)
            .then(res => res.json())
            .then(showDetails);
    });

    function showDetails(id) {
        console.log(id._embedded['wp:featuredmedia'][0].source_url);
        modal.querySelector(".modal-image").src = id._embedded['wp:featuredmedia'][0].source_url;
        modal.querySelector(".modal-name").textContent = id.title.rendered;
        modal.querySelector(".modal-description").textContent = id.description;

        //...
        modal.classList.remove("gone");
    }

    document.querySelector('.dishes').appendChild(copy);

}

modal.addEventListener("click", () => {
    modal.classList.add("gone");
});


/*jquery*/

      $(document).ready(function() {
            $('.arrange').click(function() {
                const value = $(this).attr('data-filter');
                if (value == 'alle') {
                    $('.dish-card').show('1000');
                } else {
                    $('.dish-card').not('.' + value).hide('1000');
                    $('.dish-card').filter('.' + value).show('1000');
                }
            })

            $('.arrange').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
            })

        })

