"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import "./styles.css";

/*
Templates and Layouts are similar
the only difference is layouts are render once and
templates are render and created on every route change
*/
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <h3>Auth Layout</h3>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
