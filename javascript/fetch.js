fetch('http://quater.org/portfolio/wp-json/wp/v2/dish?per_page=20&_embed')
    .then(response => response.json())
    .then(handleData)

function handleData(data){
    console.log(data)
    data.forEach(loopDishes)

}

function loopDishes(dish){
    console.log(dish.title.rendered)

    const template = document.querySelector("#dish-menu").content;
    const copy = template.cloneNode(true);

    copy.querySelector('.dish-name').textContent = dish.title.rendered;
    copy.querySelector('img').src = dish._embedded['wp:featuredmedia'][0].source_url;

    document.querySelector('.dishes').appendChild(copy);

}
