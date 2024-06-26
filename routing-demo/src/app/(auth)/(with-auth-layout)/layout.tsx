import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h3>Inner Layout</h3>
      {children}
    </div>
  );
}
