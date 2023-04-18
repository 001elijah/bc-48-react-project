// import { Suspense } from "react";

import { Header } from "components/Header/Header";

// import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
        <Header />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
            {/* <Outlet /> */}
        {/* </Suspense> */}
    </>
  );
};