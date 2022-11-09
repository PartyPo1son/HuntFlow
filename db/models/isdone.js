const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class IsDone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Result }) {
      this.hasMany(Result, { foreignKey: 'isDone_id' });
    }
  }
  IsDone.init({
    verdict: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'IsDone',
  });
  return IsDone;
};
