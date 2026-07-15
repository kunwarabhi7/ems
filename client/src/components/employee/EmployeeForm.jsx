"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { createEmployee,updateEmployee } from "@/services/employee.service";
import { getDepartments } from "@/services/department.service";

export default function EmployeeForm({
  employee,
  edit = false,
  setOpen,
  fetchEmployees,

}) {

  const [departments, setDepartments] = useState([]);

  const [formData, setFormData] = useState({
  name: employee?.name || "",
  email: employee?.email || "",
  phone: employee?.phone || "",
  salary: employee?.salary || "",
  departmentId: employee?.departmentId || "",
});

  useEffect(() => {

    const fetchDepartments = async () => {
      const { data } = await getDepartments();

      setDepartments(data.data);
    };

    fetchDepartments();

  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  if(edit){

      await updateEmployee(
        employee.id,
        formData
      );

  }else{

      await createEmployee(formData);

  }

  fetchEmployees();

  setOpen(false);

};

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <div>

        <Label>Name</Label>

        <Input
          name="name"
          onChange={handleChange}
        />

      </div>

      <div>

        <Label>Email</Label>

        <Input
          name="email"
          onChange={handleChange}
        />

      </div>

      <div>

        <Label>Phone</Label>

        <Input
          name="phone"
          onChange={handleChange}
        />

      </div>

      <div>

        <Label>Salary</Label>

        <Input
          name="salary"
          type="number"
          onChange={handleChange}
        />

      </div>

      <div>

        <Label>Department</Label>

        <select
          name="departmentId"
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        >

          <option value="">
            Select Department
          </option>

          {departments.map((department) => (

            <option
              key={department.id}
              value={department.id}
            >
              {department.name}
            </option>

          ))}

        </select>

      </div>

      <Button type="submit" className="w-full">

        {edit ? "Update Employee" : "Save Employee"}

      </Button>

    </form>

  );
}