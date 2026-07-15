"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export default function DepartmentTable({
  departments,
}) {
  return (
    <Table>

      <TableHeader>

        <TableRow>

          <TableHead>Name</TableHead>

          <TableHead>Description</TableHead>

        </TableRow>

      </TableHeader>

      <TableBody>

        {departments.map((department)=>(

          <TableRow
            key={department.id}
          >

            <TableCell>
              {department.name}
            </TableCell>

            <TableCell>
              {department.description}
            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>
  );
}