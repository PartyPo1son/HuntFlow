const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Vacansy, Stage, Comment, Result,
    }) {
      this.belongsTo(Vacansy, { foreignKey: 'vacancy_id' }); // кандидат относится к вакансии
      this.belongsTo(Stage, { foreignKey: 'stage_id' }); // кандидат относится к вакансии
      this.hasMany(Comment, { foreignKey: 'candidate_id' }); // ???????
      this.hasMany(Result, { foreignKey: 'candidate_id' });
    }
  }
  Candidate.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    city: DataTypes.STRING,
    vacancy_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};
