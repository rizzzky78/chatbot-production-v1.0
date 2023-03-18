const { atlasConnect } = require("../connection/mongodbDriver");
const { ATLAS } = require("../../config/global");

const Database = atlasConnect.db(ATLAS.DATABASE);

/**
 * ***A collection from Databases***
 */
const collections = {
  dataBot: Database.collection(ATLAS.COLLECTION.DATABOT),
  admin: Database.collection(ATLAS.COLLECTION.ADMIN),
  mainCatalog: Database.collection(ATLAS.COLLECTION.ETALASE.MAIN),
  statistic: Database.collection(ATLAS.COLLECTION.STATISTICS),
};

module.exports = { collections };
