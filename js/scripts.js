//Pokemon list array with Name, Height, Weight, and Type displayed on webpage and in console//

let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, weight: 6.9, type: ['Grass', 'Poison']},
    {name: 'Charmander', height: 0.6, weight: 8.5, type: ['Fire']},
    {name: 'Squirtle', height: 0.5, weight: 9, type: ['Water']}, 
];
document.write(`
    Pokemon 1 - ${pokemonList[0].name} | Height: ${pokemonList[0].height}m | Weight: ${pokemonList[0].weight}kg |
    Type: ${pokemonList[0].type[0]}, ${pokemonList[0].type[1]}<br>
    Pokemon 2 - ${pokemonList[1].name} | Height: ${pokemonList[1].height}m | Weight: ${pokemonList[1].weight}kg |
    Type: ${pokemonList[1].type[0]}<br>
    Pokemon 3 - ${pokemonList[2].name} | Height: ${pokemonList[2].height}m | Weight: ${pokemonList[2].weight}kg |
    Type: ${pokemonList[2].type[0]}<br>`
);
console.log(`
    Pokemon 1 - ${pokemonList[0].name} | Height: ${pokemonList[0].height}m | Weight: ${pokemonList[0].weight}kg |
    Type: ${pokemonList[0].type[0]}, ${pokemonList[0].type[1]}
    Pokemon 2 - ${pokemonList[1].name} | Height: ${pokemonList[1].height}m | Weight: ${pokemonList[1].weight}kg |
    Type: ${pokemonList[1].type[0]}
    Pokemon 3 - ${pokemonList[2].name} | Height: ${pokemonList[2].height}m | Weight: ${pokemonList[2].weight}kg |
    Type: ${pokemonList[2].type[0]}`
);
