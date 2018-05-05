const Matchs = require('./matchs.service');

listMatchs = async (req, res) => {
    const result = await Matchs.getMatchs();

    res.json(result);
}

addMatch = async (req, res) => {
    const teams = req.body.teams;

    await Matchs.addMatch({ matchId: parseInt(Math.random() * 10000), teams });

    res.json();
}

module.exports = {
    listMatchs,
    addMatch
}