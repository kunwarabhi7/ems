import sequelize from "../config/database.js";

import User from "./User.model.js";
import Department from "./Department.model.js";
import Employee from "./Employee.model.js";

Department.hasMany(Employee, {
  foreignKey: "departmentId",
});

Employee.belongsTo(Department, {
  foreignKey: "departmentId",
});

export {
  sequelize,
  User,
  Department,
  Employee,
};