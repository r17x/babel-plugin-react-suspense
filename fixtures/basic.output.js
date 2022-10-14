import React from "react";
export default function () {
  return (
    <React.Suspense fallback="loading">
      <div />
    </React.Suspense>
  );
}
