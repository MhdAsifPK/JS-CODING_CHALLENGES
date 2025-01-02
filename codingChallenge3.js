// We are building a football betting App. We get data from a web service about a
// certain game (The data we get from the web service is below, check the game
// variable). In this challenge we're going to work with this data.
// Create one player array for each team (variables 'players1' and
//     'players2'). In the given data -- players array contains 2 arrays in it.First array
//     contains team 1 players and second array contains team 2 players.
//     2. The first player in any player array is the goalkeeper and the others are field
//     players. For Bayern Munich (team 1) create one variable (gk) with the
//     goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field
//     players
//     3. Create an array 'allPlayers' containing all players of both teams (22 players)
//     4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
//     new array ('players1Final') containing all the original team1 players plus 'Thiago',
//     'Coutinho' and 'Perisic'
//     5. Based on the game.odds object, create one variable for each odd (called
//     'team1', 'draw' and 'team2')
//     6. The team with the lower odd is more likely to win. Print to the console which
//     team is more likely to win, without using an if/else statement or the ternary
//     operator.
//     Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
//     Then, call the function again with players from game.scored

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = game.players[0];
console.log(`The GoalKeeper's= ${gk},The FieldPlayers are =${fieldPlayers}`);

const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

console.log(game.odds.team1 < game.odds.team2 ? "Team1 Win" : "Team2 Win");

team1 > team2 && console.log("Team 1 is win");
team1 < team2 && console.log("Team 2 is win");

// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along
// with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages; you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// • Odd of victory Bayern Munich: 1.33
// • Odd of draw: 3.25
// • Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for
// "draw"). Hint: Note how the odds and the game objects have the same property names.
// 1. Bonus: Create an object called 'scorers' which contains the names of the players
// who scored as properties, and the number of goals as the value. In this game, it will
// look like this:
//  {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
//  }

console.log(game.scored);
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});


let sum = 0;
let avg = 0;
for (const key in game.odds) {
  console.log(game.odds[key]);
  sum += game.odds[key];
  avg = sum/ Object.keys(game.odds).length;
}
console.log(`Average odds: ${avg}`);



console.log(` Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(` Odd of draw: ${game.odds.x}`);
console.log(` Odd of victory ${game.team2}: ${game.odds.team2}`);


const scorers = {};
game.scored.forEach((player) => {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
    });
    console.log(scorers);


//     Write a program that receives a list of variable names written in underscore_case and 
// convert them to camelCase. 
// The input will come from a textarea inserted into the DOM (see code below to insert the 
// elements), and conversion will happen when the button is pressed. 
// Test data:
// • underscore_case
// • first_name 
// • Some_Variable
// • calculate_AGE 
// • delayed_departure w
// Should produce this output:
// • underscoreCase 
// • firstName 
// • someVariable 
// • calculateAge 
// • delayedDeparture 
// Hints: 
// • The solution only needs to work for a variable made out of 2 words, like a_b 
// • This challenge is difficult on purpose.
// • Explore different String methods
// • Use the String.prototype.replace() method to create a new string with some or all of its
// characters changed. Test your function with the provided test data.
const button = document.getElementById('button');
const input = document.querySelector('input');
const output = document.getElementById('output');

button.addEventListener('click', function () {
    console.log(input.value);
    
    const inputValue = input.value;
    const words = inputValue.toLowerCase().split('_');
    
    // slice
    const firstWord = words[0];
    console.log(firstWord)
    const secondWord = words[1];
    console.log(secondWord)
    const result = firstWord + secondWord.toUpperCase().slice(0);
    console.log(result);

    


    output.textContent = result;
});
