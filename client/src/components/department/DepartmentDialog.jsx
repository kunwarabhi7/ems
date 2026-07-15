"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import DepartmentForm from "./DepartmentForm";

export default function DepartmentDialog({
  open,
  setOpen,
  fetchDepartments,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >

      <DialogContent>

        <DialogHeader>

          <DialogTitle>

            Add Department

          </DialogTitle>

        </DialogHeader>

        <DepartmentForm
          setOpen={setOpen}
          fetchDepartments={fetchDepartments}
        />

      </DialogContent>

    </Dialog>
  );
}