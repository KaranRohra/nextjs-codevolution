"use client";
import React from "react";

const DashboardPage = () => {
  const [name, setName] = React.useState("");
  console.log("Dashboard Client Component");

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
};

export default DashboardPage;
