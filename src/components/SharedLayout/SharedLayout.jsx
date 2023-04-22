// import { Suspense } from "react";

import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";

// import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Loader/>
      <Header />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
            {/* <Outlet /> */}
        {/* </Suspense> */}
    </>
  );
};