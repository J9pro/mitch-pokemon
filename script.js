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


            const li = document.createElement('li');
            li.className = 'foo'

            li.textContent = random;
            const newz = document.querySelector('ul').appendChild(li)





            // const result = li.setAttribute('li');
            // console.log(result)




        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('.foo')






// document.getElementsByName('li').addEventListener("click", clear);
// // there is no Li to access since it was created in the DOM
// function clear() {
//     document.getElementsByName('li').classList.toggle('done');
// }


//use previousElementSibling



//need to hide previous list item when click button.
//need to remove list styles
//add fetch images
