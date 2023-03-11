const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage('./images/triste.jpg')
            alert("Ese Pokemon no existe o has escrito mal el nombre")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            typePoke(data)
            create(data)
            createMov(data)
        }
    })
}
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}


const typePoke = (data) => {
    const tipoPoke = document.getElementById('typePoke');
    tipoPoke.innerHTML = data.types[0].type.name.toUpperCase()
}

let fullAbility = []

function create(data) {
    const abilities = Object.values(data.abilities)

    for (let i = 0; i < abilities.length; i++) {
        let fulAbility = []

        fulAbility.push(abilities[i].ability.name)
        //console.log(fulAbility)
        const lista = document.getElementById('habPoke')
        const itemList = document.createElement('LI')
        itemList.textContent = abilities[i].ability.name
        //itemList.innerHTML = 'ability'
        lista.appendChild(itemList)

    }
}

function createMov(data) {
    const mov = Object.values(data.moves)
    //console.log(mov)


    for (let i = 0; i < 5; i++) {
        let fulMov = []
        fulMov.push(mov[i].move.name)
        //console.log(fulMov)
        const movlista = document.getElementById('movPoke')
        const itemMov = document.createElement('LI')
        itemMov.textContent = mov[i].move.name


        movlista.appendChild(itemMov)
    }
    const totMov = mov.length
    const totalMov = document.getElementById('totMov')
    totalMov.textContent = totMov
}