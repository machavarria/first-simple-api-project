document.getElementById('button').addEventListener('click', episodeInfo);


function episodeInfo(){
    const select = document.getElementById('episodes');
    const episodeNum = select.value;


    if (!episodeNum){
        alert("Do or do not. There is no try. Please select a Star Wars episode!");
        return;
    }


    const url = `https://swapi.dev/api/films/${episodeNum}/`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            document.querySelector('h2').innerText = `${data.title} (${data.release_date})`;
            document.querySelector('h3').innerText = data.opening_crawl;
            document.querySelector('h4').innerText = `Director: ${data.director} | Producer: ${data.producer}`;
        })

    .catch(err => {
        console.log(`error ${err}`)
    })
}