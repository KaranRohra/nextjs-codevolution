"use client";
import { serverSideFunction } from "@/utils/server-util";

const ClientRoutePage = () => {
  const result = serverSideFunction();
  console.log("Client route rendered");
  return (
    <div>
      ClientRoutePage <p>{result}</p>
    </div>
  );
};

export default ClientRoutePage;
