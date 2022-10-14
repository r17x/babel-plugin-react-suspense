import { Suspense } from "react";
export default function () {
  return (
    <Suspense fallback="loading">
      <div />
    </Suspense>
  );
}
