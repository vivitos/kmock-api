const { db } = require('mono-mongodb');
const data = require('../../data/matchs');
const cors = require('cors');

module.exports = async ({ log }) => {
    const matchsCollection = db.collection('matchs');

    await matchsCollection.ensureIndex({ matchId: 1 }, { unique: true });
    if (!await matchsCollection.findOne({})) await matchsCollection.insertMany(data.mockMatchs);
}