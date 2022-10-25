const request = require('request');
const url = 'https://pokeapi.co/api/v2/pokemon/';
const url2 = 'https://pokeapi.co/api/v2/pokemon-species/';

//loop pokemon and save to database
for (let i = 1; i <= 905; i++) {
    request(url + i, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const pokemon = new Pokemon({
                id: data.id,
                name: data.name,
                type: data.types.map(type => {
                    return type.type.name
                }),
                height: data.height,
                weight: data.weight,
                image: data.sprites.other['official-artwork'].front_default,
                stats: data.stats.map(stat => {
                    return {
                        name: stat.stat.name,
                        value: stat.base_stat
                    }
                }),
                flavor_text: '',

            });

            //add flavor text
            request(url2 + i, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    const data = JSON.parse(body);
                    pokemon.flavor_text = data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;
                    pokemon.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('saved');
                        }
                    }
                    );
                }
            });
        }
    });
}
