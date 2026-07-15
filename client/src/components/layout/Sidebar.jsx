"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    href: "/employees",
    icon: Users,
  },
  {
    title: "Departments",
    href: "/departments",
    icon: Building2,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">
        EMS
      </h1>

      <div className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition ${
                pathname === menu.href
                  ? "bg-black text-white"
                  : "hover:bg-muted"
              }`}
            >
              <Icon size={18} />
              {menu.title}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}