const btn = document.getElementById('btn').addEventListener("click", getRandom)

let pokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot',
    'rattata', 'raticate']

function getRandom() {
    let random = pokemon[Math.floor(Math.random() * pokemon.length)]
    console.log(random)
    const li = document.createElement('li')
    li.textContent = random
    document.querySelector('ul').appendChild(li)
}




//const btn = document.getElementById('btn').addEventListener("click", getFetch)

// function getFetch() {
//     // const choice = document.querySelector('input').value
//     // console.log(choice)
//     const url = `https://pokeapi.co/api/v2/pokemon/`

//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//
//         .then(data => {
//             //console.log(data.results)
//             for (let { name } of data.results) {
//                 const list = name;
//                 //console.log(list)
//                 const random = Math.floor(Math.random() * list.length)
//                 // console.log(random)


//                 // let arr = list.split(' ,').join(list, '')
//                 // console.log(arr)
//             }




//


//             //console.log(obj.name)

//             // });



//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }





                   //data.results.forEach(obj => {
            //for (const key in data.results) {
            //const names = obj.name