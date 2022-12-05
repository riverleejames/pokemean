/* GET home page */
/* GET 'About' page */
const about = function (req, res) {
    res.render('about', {
        user : req.username,
        items: [
            {
                heading: 'About',
                paragraph: 'PokéRiver is a web-based application that leverages the power of MongoDB, Express, Angular and Node.js (MEAN) to give the user the ability to login into the app and view information related to Pokémon.'
            },
            {
                heading: 'Application Details',
                paragraph: 'The application will use MongoDB to persist both Pokémon and user authentication data, the backend will use Express (a Node.js framework) to manage servers and routing. We will use the Pug templating engine in Express for certain pages of the PokéRiver project, we will use Angular in the front end to view the Pokémon images/information page. '
            },
            {
                heading: 'Functionality',
                paragraph: 'PokéRiver will have the following functionality: '
            }
        ],
        lists: [
            {
                item: 'Registration / Login (Passport.js for Authentication)'
            },
            {
                item: 'View Pokémon images / information'
            },
            {
                item: 'Add Pokémon to favorites (collect Pokémon)'
            }
        ]
    });
};

module.exports = {
    about
};
