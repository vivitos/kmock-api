const { db } = require('mono-mongodb')

getMatchs = async () => {
    const matchs = await db.collection('matchs').find({}).toArray();

    return matchs;
}

addMatch = async (match) => {
    return await db.collection('matchs').insertOne(match);
}

module.exports = {
    getMatchs,
    addMatch
}