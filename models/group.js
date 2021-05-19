'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Group.init({
    group_id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
    group_title: DataTypes.STRING,
		group_status: DataTypes.STRING,
		group_user_id_admin: DataTypes.STRING,
		group_user_id_create: DataTypes.STRING,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Group',
		freezeTableName: true,
    tableName: 'tbl_group',
		timestamps: false
  });
  return Group;
};
