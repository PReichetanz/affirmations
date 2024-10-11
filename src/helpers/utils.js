import chalk from "chalk";
import affirmations from "./affirmations.js";

export default function getRandomAffirmation() {
  const randomIndex = getRandomIndex(0, affirmations.length - 1);
  const randomAffirmation = affirmations[randomIndex].text;
  console.log(`
      Hey, heute ist ein toller Tag zum Coden! Denn:
      ${chalk.bgGreenBright(randomAffirmation)}
      `);
}

function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
