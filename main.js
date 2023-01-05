// const btn = document.getElementById('btn').addEventListener("click", getRandom)

// let pokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot',
//     'rattata', 'raticate']

// function getRandom() {
//     let random = pokemon[Math.floor(Math.random() * pokemon.length)]
//     console.log(random)
//     const li = document.createElement('li')
//     li.textContent = random
//     document.querySelector('ul').appendChild(li)
// }




// const btn = document.getElementById('btn').addEventListener("click", getFetch)

// function getFetch() {
//     // const choice = document.querySelector('input').value
//     // console.log(choice)
//     const url = 'https://pokeapi.co/api/v2/pokemon?limit=20/'

//     fetch(url)
//         .then(res => res.json()) // parse response as JSON

//         .then(data => {
//             //console.log(data)
//             data.results.forEach(pokemon => {
//                 fetchPokemonData(pokemon)
//             });
//             //for (let { name } of data.results) {
//             //const list = name;
//             //console.log(list)
//             //const random = Math.floor(Math.random() * list.length)
//             // console.log(random)


//             // let arr = list.split(' ,').join(list, '')
//             // console.log(arr)
//             //}

//             function fetchPokemonData(pokemon) {
//                 let url2 = pokemon.url;
//                 fetch(url)
//                     .then(res2 => res2.json())
//                     .then(function (data2) {
//                         console.log(data2)
//                     })
//             }






//             //console.log(obj.name)

//             // });



//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }

// function renderPokemon(data2) {
//     let pokemonContainer = document.getElementById('container');
//     let pokeContainer = document.createElement("div");
//     let pokeName = document.createElement('h4');
//     pokeName.innerText = data2;
//     pokeContainer.append(pokeName);
//     pokemonContainer.appendChild(pokeContainer)

// }

// function createTypes(type, ul) {
//     createTypes.forEach(function (type) {
//         let typeLi = document.createElement('li');
//         typeLi.innerText = type['type']['name'];
//         ul.append(typeLi)
//     })
// }


                   //data.results.forEach(obj => {
            //for (const key in data.results) {
            //const names = obj.name



// const container = document.querySelector('#container');

// for(let i = 0; i < ; i++){

//     const newImg = document.createElement('img')
//     newImg.src = ''
//     document.querySelector('section').appendChild(img)
// }