"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">
        Employee Management System
      </h2>

      <Button
        variant="destructive"
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  );
}