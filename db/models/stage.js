const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidate }) {
      this.hasMany(Candidate, { foreignKey: 'stage_id' });
    }
  }
  Stage.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};
