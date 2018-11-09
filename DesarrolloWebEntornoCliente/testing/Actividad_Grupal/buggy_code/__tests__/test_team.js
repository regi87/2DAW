const Team = require('../app/data/team').Team;
const Player = require('../app/data/player').Player;
const readJSONData = require('../app/data/json_reader').readJSONData;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;

//testing construct
test('Constructor error', () => {
    expect(() => new Team("Barcelona"));
});
//testing name
test('Testing Name', () => {
    let a = new Team("Barcelona");
    expect(a.getTeamName()).toBe("Barcelona");
});

//Method to add a new player and determine if a player already plays for the team
test('Test to add player in team', () => {

    let team = new Team("Real Madrid");
    let jsonObjects = readJSONData('./data/sample.json');
    let player = Player.fromDatasetJSONObject(0, jsonObjects[0]);
    //add player   
    expect(team.addPlayer(player)).toBe(true);
    //comprobate
    expect(team.hasPlayer(player)).toBe(true);
    //team value
    expect(team.getTeamValue()).toBe(95500000);


});

//Method to add a collection player 
test('Test to add a collection players', () => {
    let team = new Team("Real Madrid");
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    expect(team.addPlayers(arrayPlayers));
    //team value
    expect(team.getTeamValue()).toBe(118300000);
    //get players
    let players = team.getPlayers();
    expect(team.getPlayers()).toEqual(players);
    //console.log(players);
    //get number players in the team
    expect(team.getNumberPlayers()).toBe(3);

    /** POSIBLE BUGGGGGGGGGGGG NO HACE OPERACIÓN EN LA CLASE SÓLO DEVUELVE UN 0**/
    //get verall quality
    expect(team.getTeamOverallQuality()).toBe(93);
});


/** POSIBLE BUGGGGGGGGGGGG NOS DEVUELVE SIEMPRE UNDEFINED**/
//get random valid tactic for a team return string
test('Test get random valid tactic for a team return string', () => {
    let tactic = Team.getRandomTeamTactic();
    console.log("Tactica :" + tactic);
});

/** POSIBLE BUGGGGGGGGGGGG anque le pasemos el string como pide nos salta el error de NaN**/
//Static method that gets a tactic and parses it to extract the number of defenders, midfielders, and attackers
test('Test gets a tactic and parses it to extract the number of defenders, midfielders, and attackers', () => {
    let arrayReturn = Team._parseTactic('4-4-2');
    console.log("Defense: " + arrayReturn[0] + " midfielders:" + arrayReturn[1] + " Attackers: " + arrayReturn[2]);
});

/** POSIBLE BUGGGGGGGGGGGG le pasamos el string con una letra**/
//Static method that gets a tactic and parses it to extract the number of defenders, midfielders, and attackers
test('Test gets a tactic and parses it to extract the number of defenders, midfielders, and attackers, with letter', () => {
    expect(f => Team._parseTactic('4-4-e')).toThrowError(Error);
});


/** POSIBLE BUGGGGGGGGGGGG al poder pasarle por ejemplo esta alineación 4-4-20**/
test('Test gets a tactic and parses it to extract the number of defenders, midfielders, and attackers, with 28 players', () => {
    expect(f => Team._parseTactic('4-4-0')).toThrowError(Error);
});


//Gets a random number of players from a group of players
test('Test Gets a random number of players from a group of players', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayReturn = Team._getRandomPlayers(jsonObjects, 2);
    console.log(arrayReturn);   
    expect(f=> Team._getRandomPlayers(jsonObjects, 4)).toThrowError(Error);
});

// Static method employed to generate a random team (11 players) from a list of possible players
test('Test Static method employed to generate a random team (11 players) from a list of possible players', () => {
    let jsonObjects = readJSONData('./data/sample_11Players.json');

    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    console.log(arrayPlayers);
  // Team.createRandomTeam(arrayPlayers, '4-5-1', 'SERGIO_HOMONCULO', 1000000);
    
});
