"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DepartmentTable from "@/components/department/DepartmentTable";
import DepartmentDialog from "@/components/department/DepartmentDialog";
import { getDepartments } from "@/services/department.service";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchDepartments = async () => {
    try {
      const { data } = await getDepartments();
      setDepartments(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Departments
        </h1>

        <Button onClick={() => setOpen(true)}>
          Add Department
        </Button>
      </div>

      <DepartmentTable
        departments={departments}
      />

      <DepartmentDialog
        open={open}
        setOpen={setOpen}
        fetchDepartments={fetchDepartments}
      />
    </div>
  );
}