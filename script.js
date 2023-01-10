// const btn = document.getElementById('btn')
// btn.addEventListener("click", function () {
//     getFetch(1);
// })

// function getFetch(x) { //number of results we want displayed

//     const random = Math.floor(Math.random() * 21)
//     for (let i = 1; i <= x; i++) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)

//             .then(res => res.json())

//             .then(data => {
//                 console.log(data)
//                 const name = data.name
//                 const img = data.sprites.front_default

//                 const li = document.createElement('li');
//                 const image = document.createElement('img');
//                 li.className = 'foo'

//                 image.src = img
//                 li.textContent = name;

//                 document.querySelector('ul').innerHTML = ''

//                 li.appendChild(image)
//                 document.querySelector('ul').appendChild(li);


//             })
//             .catch(err => {
//                 console.log(`error ${err}`)
//             });

//     }
// }



const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    getFetch(1)
});

function getFetch(x) {
    let random = Math.floor(Math.random() * 21)
    for (let i = 1; i <= x; i++) {
        // const url = `https://pokeapi.co/api/v2/pokemon/${i}/`


        fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
            .then(res => res.json())
            .then(data => {
                const name = data.name
                const image = data.sprites.front_default
                //console.log(name, image)

                const li = document.createElement('li')
                const img = document.createElement('img')
                //console.log(img)
                li.textContent = name
                img.src = image
                li.style.listStyle = 'none'

                document.querySelector('ul').textContent = ''

                document.querySelector('ul').appendChild(li)
                li.appendChild(img)


            })
    }
}







