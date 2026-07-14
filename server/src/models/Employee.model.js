import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      type: DataTypes.STRING,
    },

    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    departmentId: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
  },
  {
    timestamps: true,
    tableName: "employees",
  }
);

export default Employee;