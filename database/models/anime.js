'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Anime.init({
    name: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    episodios: DataTypes.INTEGER,
    temporadas: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    generos: DataTypes.STRING,
    estudio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};