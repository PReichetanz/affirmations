import chalk from "chalk";
import {
  softwareDevelopmentAffirmations,
  personalAffirmations,
} from "./affirmations.js";

function getDevAffirmation() {
  const randomIndex = getRandomIndex(
    0,
    softwareDevelopmentAffirmations.length - 1
  );
  const randomAffirmation = softwareDevelopmentAffirmations[randomIndex].text;
  console.log(`
      Hey, heute ist ein toller Tag zum Coden! Denn:
      ${chalk.green(randomAffirmation)}
      `);
}

function getPersonalAffirmation() {
  const randomIndex = getRandomIndex(0, personalAffirmations.length - 1);
  const randomAffirmation = personalAffirmations[randomIndex].text;
  console.log(`
      Hey, heute ist ein toller Tag! Denn:
      ${chalk.green(randomAffirmation)}
      `);
}

function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { getDevAffirmation, getPersonalAffirmation };
