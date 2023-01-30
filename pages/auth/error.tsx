import React from "react";
import { useRouter } from "next/router";

function Error() {
  const router = useRouter();
  console.log("router", router.query.error);

  return <div>Error pages</div>;
}

export default Error;
