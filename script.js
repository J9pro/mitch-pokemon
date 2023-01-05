const btn = document.getElementById('btn').addEventListener("click", getFetch)

function getFetch() {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20/'

    fetch(url)
        .then(res => res.json()) // parse response as JSON

        .then(data => {

            let arrayOfPokemonNames = data.results.map(e => e.name)
            //console.log(arrayOfPokemonNames)


            const random = arrayOfPokemonNames[Math.floor(Math.random() * 21)]
            //console.log(random)


            const li = document.createElement('li')
            li.textContent = random
            document.querySelector('ul').appendChild(li)

            // li.toggleAttribute('disabled')







        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


// function clear() {
//     let list = document.getElementById('li')
//     list.removeChild.childN
// }




//need to hide previous list item when click button.
//need to remove list styles
//add fetch images
