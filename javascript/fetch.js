fetch('https://quater.org/restaurant-information/wp-json/wp/v2/dish?_embed&per_page=100')
    .then(response => response.json())
    .then(handleData)

function handleData(data){
    console.log(data)
    data.forEach(loopDishes)

}

function loopDishes(dish){
    console.log(dish.title.rendered)

    const p = document.createElement('p');
    p.textContent = dish.title.rendered;
    document.querySelector('main').appendChild(p);

}
