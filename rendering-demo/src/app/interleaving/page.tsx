import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

const page = () => {
  return (
    <div>
      <h1>Interleaving Component</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
};

export default page;
