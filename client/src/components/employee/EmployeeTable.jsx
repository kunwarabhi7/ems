"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import EditEmployeeDialog from "./EditEmployeeDialog";
import DeleteEmployeeDialog from "./DeleteEmployeeDialog";

export default function EmployeeTable({
  employees,
  fetchEmployees,
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>

              <TableCell>{employee.email}</TableCell>

              <TableCell>{employee.phone}</TableCell>

              <TableCell>
                {employee.Department?.name}
              </TableCell>

              <TableCell>
                ₹{employee.salary}
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <EditEmployeeDialog
                    id={employee.id}
                    fetchEmployees={fetchEmployees}
                  />

                  <DeleteEmployeeDialog
                    id={employee.id}
                    fetchEmployees={fetchEmployees}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={6}
              className="text-center py-6"
            >
              No Employees Found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}