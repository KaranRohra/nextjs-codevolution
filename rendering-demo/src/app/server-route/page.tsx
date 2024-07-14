import { serverSideFunction } from "@/utils/server-util";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  console.log("Server route rendered");
  return (
    <div>
      ServerRoutePage <p>{result}</p>
    </div>
  );
};

export default ServerRoutePage;
