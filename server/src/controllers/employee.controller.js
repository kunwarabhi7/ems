import * as employeeService  from '../services/employee.service.js'

export const getEmployees = async (req, res, next) => {
  try {
    const data = await employeeService.getEmployees();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getEmployeeById = async (req, res, next) => {
  try {
    const data = await employeeService.getEmployeeById(req.params.id);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const createEmployee = async (req, res, next) => {
  try {

    console.log(req.body);

    const data = await employeeService.createEmployee(req.body);

    res.status(201).json({
      success: true,
      data,
    });

  } catch (error) {
    console.error(error);
    console.error(error.parent);
    console.error(error.original);
    next(error);
}
}

export const updateEmployee = async (req, res, next) => {
  try {
    const data = await employeeService.updateEmployee(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    await employeeService.deleteEmployee(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};