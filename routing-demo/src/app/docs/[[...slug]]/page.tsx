import React from "react";

/*
1. /docs page show 404 if single square brackets used
2. /docs show this page if double square brackets used

dynamic routing works as it is in both of the above scenarios
*/
const Docs = ({ params }: { params: { slug: string[] } }) => {
  const { slug }: { slug: string[] } = params;
  if (slug?.length === 1) {
    return <h1>Viewing docs for feature {<u>{slug[0]}</u>}</h1>;
  }
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature <u>{slug[0]}</u> and concept {<u>{slug[1]}</u>}
      </h1>
    );
  }
  return (
    <div>
      <h1>
        Docs Home page <u>{slug?.toString()}</u>
      </h1>
    </div>
  );
};
export default Docs;
