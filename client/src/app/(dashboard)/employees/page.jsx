"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getEmployees } from "@/services/employee.service";
import EmployeeTable from "@/components/employee/EmployeeTable";
import EmployeeDialog from "@/components/employee/EmployeeDialog";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchEmployees = async () => {
    try {
      const { data } = await getEmployees();
      setEmployees(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Employees
        </h1>

        <Button onClick={() => setOpen(true)}>
          Add Employee
        </Button>

      </div>

<EmployeeTable
    employees={employees}
    fetchEmployees={fetchEmployees}
/>

      <EmployeeDialog
        open={open}
        setOpen={setOpen}
        fetchEmployees={fetchEmployees}
      />

    </div>
  );
}