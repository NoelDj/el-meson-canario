fetch('https://quater.org/assignment/wp-json/wp/v2/property?_embed')
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

    const img = document.createElement('img');
    img.src = src= dish._embedded['wp:featuredmedia'][0].source_url

    document.querySelector('main').appendChild(img);
}
