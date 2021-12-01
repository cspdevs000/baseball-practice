const { Team } = require('./models');
const { Player } = require('./models');
const { Score } = require('./models');

// Team.create({
//     name: 'Orioles',
//     league: 'American',
//     founded: 1954,
//     location: 'Baltimore',
//     worldseries: 3,
//     leaguechampionships: 7
// })
// .then(function(teamModel) {
//     console.log('New team model created..', teamModel.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR: Team not added..', error);
// });

Player.create({
    firstname: 'Edwin',
    lastname: 'Diaz',
    number: 39,
    position: 'P',
    team: 'New York Mets',
    age: 27
})
.then(function(playerModel) {
    console.log('New player model created..', playerModel.toJSON());
})
.catch(function(err) {
    console.log('ERROR: Player not added..', error);
});


//change alonso age