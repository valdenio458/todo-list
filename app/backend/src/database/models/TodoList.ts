import { Model, DataTypes } from 'sequelize';
import db from '.';
import User from './Users';

class TodoList extends Model {
  public id: number;

  public idUser: number;

  public title: string;

  public description: string;

  public status: boolean;
}

TodoList.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'todolist',
  timestamps: false,
});

TodoList.belongsTo(User, { foreignKey: 'idUser', as: 'user' });

export default TodoList;
