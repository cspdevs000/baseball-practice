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

// Player.create({
//     firstname: 'Edwin',
//     lastname: 'Diaz',
//     number: 39,
//     position: 'P',
//     team: 'New York Mets',
//     age: 27
// })
// .then(function(playerModel) {
//     console.log('New player model created..', playerModel.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR: Player not added..', error);
// });


//change alonso age


// Score.create({
//     teamone: 'Los Angeles Dodgers',
//     teamtwo: 'Atlanta Braves',
//     teamonescore: 2,
//     teamtwoscore: 4,
//     wp: 'Matzek',
//     lp: 'Buehler',
//     save: 'Smith, W',
//     series: '2-4'
// })
// .then(function(scoreModel) {
//     console.log('New score model created..', scoreModel.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR: Score model not added..', error);
// });

// Score.destroy({
//     where: { id: 13 }
//   }).then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//   });


// Team.destroy({
//     where: { id: 3 }
//   }).then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//   });


// Player.destroy({
//     where: { id: 4 }
//   }).then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//   });

// Team.findAll().then(Teams=>{
//     console.log(Teams);
// });

// Player.findAll().then(Players=>{
//     console.log(Players);
// });

// Score.findAll().then(Scores=>{
//     console.log(Scores);
// });

// Team.findOne({
//     where: { name: 'Mets' }
// }).then(foundTeam=>{
//     console.log(foundTeam.toJSON());
// })

// Player.findOne({
//     where: { id: 6 }
// }).then(foundPlayer=>{
//     console.log(foundPlayer.toJSON());
// })


// Score.findOne({
//     where: { series: '2-2' }
// }).then(foundScore=>{
//     console.log(foundScore.toJSON());
// })

// Team.findByPk(7)
// .then(function(team) {
//     console.log(team.toJSON());
// })
// .catch(function(err){});

// Player.findByPk(2)
// .then(function(player) {
//     console.log(player.toJSON());
// })
// .catch(function(err){});

// Score.findByPk(11)
// .then(function(score) {
//     console.log(score.toJSON());
// })
// .catch(function(err){});

// Team.update({
//     name: 'Reds',
//     league: 'National',
//     founded: 1954,
//     location: 'Cincinnati',
//     worldseries: 5,
//     leaguechampionships: 9
// }, {
//     where: {
//       id: 9
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// });

// Player.update({
//     age: 27
// }, {
//     where: {
//       firstname: 'Pete',
//       lastname: 'Alonso'
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// });

Score.update({
    teamone: 'Brooklyn Dodgers'
}, {
    where: {
      teamone: 'Los Angeles Dodgers',
    }
}).then(numRowsChanged=>{
    console.log(numRowsChanged)
});
