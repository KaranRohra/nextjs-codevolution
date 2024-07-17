import ImageCarousel from "@/components/ImageCarousel";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  console.log("Server route rendered");
  return (
    <div>
      ServerRoutePage <p>{result}</p>
      <ImageCarousel />
    </div>
  );
};

export default ServerRoutePage;
