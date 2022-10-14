import React from "react";
const Loading = () => "Loading...";
export default function () {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <div />
      </React.Suspense>
      <React.Suspense fallback={<Loading />}>
        <div />
      </React.Suspense>
      <React.Suspense fallback={<Loading />}>
        <div />
      </React.Suspense>
      <React.Suspense fallback={<Loading />}>
        <div />
      </React.Suspense>
      <React.Suspense fallback={<Loading />}>
        <div />
      </React.Suspense>
      <React.Suspense fallback={<Loading />}>
        <div />
      </React.Suspense>
    </>
  );
}

