"use client";

import { useEffect, useState } from "react";

import StatsCard from "@/components/dashboard/StatsCard";

import { getEmployees } from "@/services/employee.service";
import { getDepartments } from "@/services/department.service";

export default function DashboardPage() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const employeeRes = await getEmployees();
      const departmentRes = await getDepartments();

      setEmployeeCount(employeeRes.data.data.length);
      setDepartmentCount(departmentRes.data.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatsCard
          title="Employees"
          value={employeeCount}
          link="/employees"
        />

        <StatsCard
          title="Departments"
          value={departmentCount}
         link="/departments" 
        />
      </div>
    </div>
  );
}