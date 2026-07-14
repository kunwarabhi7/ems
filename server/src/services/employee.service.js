import Employee from '../models/Employee.model.js'
import Department from '../models/Department.model.js'

export const getEmployees = async () => {
  return await Employee.findAll({
    attributes: [
    "id",
    "name",
    "email",
    "phone",
    "salary"
  ],
    include: [
      {
        model: Department,
        attributes: ["id", "name"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
};

export const getEmployeeById = async (id) => {
  const employee = await Employee.findByPk(id, {
    include: [
      {
        model: Department,
        attributes: ["id", "name"],
      },
    ],
  });

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

export const createEmployee = async (payload) => {
  const employee = await Employee.create(payload);

  return employee;
};

export const updateEmployee = async (id, payload) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  await employee.update(payload);

  return employee;
};

export const deleteEmployee = async (id) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  await employee.destroy();

  return true;
};