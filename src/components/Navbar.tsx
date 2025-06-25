"use client";

import Link from "next/link";
import { FaCode, FaMoon } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold">&lt;/&gt;</span>
        <div className="hidden md:flex space-x-4">
          <Link href="#profile-card" className="hover:text-blue-400">Profile Card</Link>
          <Link href="#strategy" className="hover:text-blue-400">Development Strategy</Link>
          <Link href="#update-plan" className="hover:text-blue-400">Update Plan</Link>
          <Link href="#components" className="hover:text-blue-400">Components</Link>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-white">
            Karthik | Freelancer
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 text-white">
          <DropdownMenuItem>
            <Link href="#contact" className="flex items-center">
              <FaCode className="mr-2" /> Contact
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaMoon className="mr-2" /> Toggle Dark Mode
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
