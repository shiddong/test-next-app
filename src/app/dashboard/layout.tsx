import { PropsWithChildren, ReactNode } from "react";

export default function DashboartLayout({ children }: PropsWithChildren) {
  return (
    <div>
      Dashboard Layout
      {/* Include shared UI here e.g. a header or sidebar */}
      <section>{children}</section>
    </div>
  );
}
