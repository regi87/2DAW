const Player = require('../app/data/player').Player;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;
const readJSONData = require('../app/data/json_reader').readJSONData;

//testing construct
test('Constructor error', () => {
    expect(() => new Player(0));
});

//testing player fromDatasetJSONObject method
test('Testing player fromDatasetJSONObject method', () => {
   // let pl = new Player(0);
   let jsonObjects = readJSONData('./data/sample.json'); 
    let player = Player.fromDatasetJSONObject(0,jsonObjects[0]);
    expect(player.getName()).toBe("Cristiano Ronaldo");
    expect(player.getAge()).toBe(32);
    expect(player.getNationality()).toBe("Portugal");    
});

//testing player isGoalKeeper method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    expect(arrayPlayers[0].isGoalKeeper()).toBe(false);
});

//testing player isForward method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    expect(arrayPlayers[0].isForward()).toBe(true);
});

//testing player isForward method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);    
    expect(arrayPlayers[0].isBack()).toBe(false);
});

//testing player isMidfielder method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);        
    expect(arrayPlayers[0].isMidfielder()).toBe(true);
});

//testing player getValue method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);           
    expect(arrayPlayers[0].getValue()).toBe(95500000);
});


//testing player getTeam method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);           
    expect(arrayPlayers[0].getTeam()).toBe("Real Madrid CF");
});


//testing player getName method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);  
    expect(arrayPlayers[0].getName()).toBe("Cristiano Ronaldo");
});

//testing player getID method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);  
    expect(arrayPlayers[0].getID()).toBe(20801);
});

//testing player getQuality method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);  
    expect(arrayPlayers[0].getQuality()).toBe(94);
});

//testing player Equals method
test('Testing player fromDatasetJSONObject method', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);  
    expect(arrayPlayers[0].equals(arrayPlayers[0])).toBe(true);
});