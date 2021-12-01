'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Score.init({
    teamone: DataTypes.STRING,
    teamtwo: DataTypes.STRING,
    teamonescore: DataTypes.INTEGER,
    teamtwoscore: DataTypes.INTEGER,
    wp: DataTypes.STRING,
    lp: DataTypes.STRING,
    save: DataTypes.STRING,
    series: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};