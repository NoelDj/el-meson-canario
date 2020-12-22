fetch('http://quater.org/portfolio/wp-json/wp/v2/event?_embed')
    .then(response => response.json())
    .then(handleData)

function handleData(data) {
    console.log(data)
    data.forEach(loopOffers)
    document.querySelector('article').classList.add('highlighted')

}

function loopOffers(event) {

    const template = document.querySelector(".events-template").content;
    const copy = template.cloneNode(true);

    copy.querySelector(".events-title").textContent = event.title.rendered;
     copy.querySelector(".date").textContent = event.day;




    document.querySelector('.events').appendChild(copy);

}
