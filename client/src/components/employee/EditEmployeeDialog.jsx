"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

import EmployeeForm from "./EmployeeForm";
import { getEmployeeById } from "@/services/employee.service";

export default function EditEmployeeDialog({
  id,
  fetchEmployees,
}) {
  const [employee, setEmployee] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const loadEmployee = async () => {
      const { data } = await getEmployeeById(id);

      setEmployee(data.data);
    };

    loadEmployee();

  }, [open]);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >

      <DialogTrigger asChild>

        <Button
          size="icon"
          variant="secondary"
        >
          <Pencil size={18} />
        </Button>

      </DialogTrigger>

      <DialogContent>

        <DialogHeader>

          <DialogTitle>

            Edit Employee

          </DialogTitle>

        </DialogHeader>

        {employee && (

          <EmployeeForm
            edit
            employee={employee}
            setOpen={setOpen}
            fetchEmployees={fetchEmployees}
          />

        )}

      </DialogContent>

    </Dialog>
  );
}