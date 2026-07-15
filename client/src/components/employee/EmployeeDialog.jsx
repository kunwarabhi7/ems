"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import EmployeeForm from "./EmployeeForm";

export default function EmployeeDialog({
  open,
  setOpen,
  fetchEmployees,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            Add Employee
          </DialogTitle>

        </DialogHeader>

        <EmployeeForm
          setOpen={setOpen}
          fetchEmployees={fetchEmployees}
        />

      </DialogContent>

    </Dialog>
  );
}