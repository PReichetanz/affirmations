#!/usr/bin/env node
import { program } from "commander";
import {getDevAffirmation, getPersonalAffirmation} from "./helpers/utils.js";

program
  .name("affirmations-cli")
  .description("A CLI to get randomized affirmations as a junior developer or human, respectively.")
  .option("-p, --personal", "Get an affirmation for the personal area")
  .parse(process.argv);

const options = program.opts();

if (options.personal) {
  getPersonalAffirmation()
} else {
  getDevAffirmation();
}
