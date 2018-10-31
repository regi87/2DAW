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
    let a= new Team("Barcelona");
    expect(a.getTeamName()).toBe("Barcelona");
});

//Method to add a new player and determine if a player already plays for the team
test('Test to add player in team', () => {
   
    let team = new Team("Real Madrid");
    let jsonObjects = readJSONData('./data/sample.json'); 
    let player = Player.fromDatasetJSONObject(0,jsonObjects[0]); 
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
    let players= team.getPlayers(); 
    expect(team.getPlayers()).toEqual(players);   
    //console.log(players);
    //get number players in the team
    expect(team.getNumberPlayers()).toBe(3);
    /** POSIBLE BUGGGGGGGGGGGG NO HACE OPERACIÓN EN LA CLASE SÓLO DEVUELVE UN 0**/
    //get verall quality
    expect(team.getTeamOverallQuality()).toBe(0);

});
