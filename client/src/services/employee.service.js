import axiosInstance from "@/lib/axios";


export const getEmployees = () =>
  axiosInstance.get("/employees");

export const createEmployee = (data) =>
  axiosInstance.post("/employees", data);

export const updateEmployee = (id, data) =>
  axiosInstance.put(`/employees/${id}`, data);

export const deleteEmployee = (id) =>
  axiosInstance.delete(`/employees/${id}`);

export const getEmployeeById = (id) =>
  axiosInstance.get(`/employees/${id}`);
