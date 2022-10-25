const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://pokedex-heroku.herokuapp.com';
}



const renderHomePage = (req, res, responseBody) => {
    res.render('index', {
        buttons: [
            {
                buttonText: 'View Info'
            }
        ],
        pokeinfo: responseBody

    });
}


const homelist = function (req, res) {
    const path = '/api/pokemon';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {},
    };
    request(
        requestOptions,
        (err, response, body) => {
            renderHomePage(req, res, body);
        }
    );
};


const renderPokemonInfoPage = (req, res, pokemon) => {
    res.render('pokeinfo', {
        id: pokemon.id,
        name: pokemon.name,
        text: pokemon.flavor_text,
        image: pokemon.image,
        stats: pokemon.stats,
        type: pokemon.type,
        height: pokemon.height,
        weight: pokemon.weight,
        icons: [{
            icon: "../images/statIcons/heart.png"
        },
        {
            icon: "../images/statIcons/attack.png"
        },
        {
            icon: "../images/statIcons/def.png"
        },
        {
            icon: "../images/statIcons/magic.png"
        },
        {   
            icon: "../images/statIcons/specDef.png"
        },
        {
            icon: "../images/statIcons/speed.png"
        }
    ],
        buttons: [
            {
                btnNext: 'Next Pokémon'
            },
            {
                btnPrev: 'Previous Pokémon'
            }
        ]
    });
}


const pokemonInfo = (req, res, responseBody) => {
    const path = '/api/pokeinfo/' + req.params.pokemonid;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {},
    };
    request(
        requestOptions,
        (err, response, body) => {
            renderPokemonInfoPage(req, res, body);
        }
    );
};

module.exports = {
    homelist,
    pokemonInfo
};
