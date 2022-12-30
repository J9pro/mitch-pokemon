const btn = document.getElementById('btn').addEventListener("click", getFetch)

function getFetch() {
    // const choice = document.querySelector('input').value
    // console.log(choice)
    const url = ` https://pokeapi.co/api/v2/pokemon/`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.results)
            // data.results.forEach(obj => {
            for (const key in data.results) {
                console.log(typeof key.name)
                // this.name = array[Math.floor(Math.random() * array.length - 1)]
                //const random = (Math.random().toString() * obj.name) + 1;

                //console.log(obj.name)

            };



        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}




// const li = document.createElement('li')
                //li.textContent = obj.name
                //document.querySelector('ul').appendChild(li)