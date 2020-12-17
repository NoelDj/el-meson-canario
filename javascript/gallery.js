fetch('http://quater.org/portfolio/wp-json/wp/v2/picture?per_page=20&_embed')
    .then(response => response.json())
    .then(handleData)

function handleData(data){
    console.log(data)
    data.forEach(loopPictures)

}

function loopPictures(picture){

    const img = document.createElement('img');

    img.src = picture._embedded['wp:featuredmedia'][0].source_url;

    document.querySelector('main').appendChild(img);

}
