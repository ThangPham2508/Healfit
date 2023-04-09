const axios = require("axios");

const dietDb = require("./diet.mongo");

async function addNewInfo(info) {
  await dietDb.findOneAndUpdate(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    {
      upsert: true,
    }
  );
}