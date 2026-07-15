"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { createDepartment } from "@/services/department.service";

export default function DepartmentForm({
  setOpen,
  fetchDepartments,
}) {

  const [formData,setFormData]=useState({
      name:"",
      description:"",
  });

  const handleChange=(e)=>{

      setFormData({
          ...formData,
          [e.target.name]:e.target.value
      });

  };

  const handleSubmit=async(e)=>{

      e.preventDefault();

      await createDepartment(formData);

      fetchDepartments();

      setOpen(false);

  };

  return(

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

              <Label>Description</Label>

              <Input
              name="description"
              onChange={handleChange}
              />

          </div>

          <Button onClick={handleSubmit}
          className="w-full"
          >

              Save Department

          </Button>

      </form>

  );

}