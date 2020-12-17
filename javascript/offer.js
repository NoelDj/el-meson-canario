fetch('http://quater.org/portfolio/wp-json/wp/v2/offer?_embed')
    .then(response => response.json())
    .then(handleData)

function handleData(data) {
    console.log(data)
    data.forEach(loopOffers)

}

function loopOffers(offer) {

    const template = document.querySelector(".offer-template").content;
    const copy = template.cloneNode(true);

    copy.querySelector('.offer-title').textContent = offer.title.rendered;

    copy.querySelector('.offer-description').textContent = offer.description;

    copy.querySelector('.offer-price').textContent = offer.price;

    copy.querySelector('.offer-img').src = offer._embedded['wp:featuredmedia'][0].source_url;



    document.querySelector('.offers').appendChild(copy);

}
