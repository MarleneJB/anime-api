const models = require("../database/models");

const createAnime = async (req, res) => {
  try{
     const Anime = await models.Anime.create(req.body);
     return res.status(201).json({
        Anime
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

const getAllAnimes = async (req, res) => {
  console.log('Obteniendo Animes');
  try {
    const animes = await models.Anime.findAll({
      include: [
        ]
    });
    return res.status(200).json({ animes });
  } catch(error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createAnime,
  getAllAnimes
};