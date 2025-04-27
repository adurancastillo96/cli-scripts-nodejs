// ¡Buena suerte!
const sides = Number(process.argv[2]);

const getRandomNumber = (numSides) => Math.floor(Math.random() * numSides) + 1;

const number = getRandomNumber(sides);

console.log(`A dice of ${sides} sides - Random number: ${number}`);
