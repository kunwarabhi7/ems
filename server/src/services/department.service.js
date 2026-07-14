import Department from "../models/Department.model.js";




export const getDepartments = async () => {
  return await Department.findAll({
    order: [["createdAt", "DESC"]],
  });
};

export const createDepartment = async ({ name, description }) => {
  return await Department.create({
    name,
    description,
  });
};


export const updateDepartment = async (id, payload) => {
  const department = await Department.findByPk(id);

  if (!department) {
    throw new Error("Department not found");
  }

  await department.update(payload);

  return department;
};

export const deleteDepartment = async (id) => {
  const department = await Department.findByPk(id);

  if (!department) {
    throw new Error("Department not found");
  }

  await department.destroy();
};