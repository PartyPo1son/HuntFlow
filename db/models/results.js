const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidate, Stage, IsDone }) {
      this.belongsTo(Candidate, { foreignKey: 'candidate_id' });
      this.belongsTo(Stage, { foreignKey: 'stage_id' });
      this.belongsTo(IsDone, { foreignKey: 'isDone_id' });
    }
  }
  Results.init({
    candidate_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    isDone_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Results',
  });
  return Results;
};
