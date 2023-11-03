import { PropsWithChildren } from "react";

export default function MarketLayout({ children }: PropsWithChildren) {
  return (
    <div>
      Market Layout
      {/* Include shared UI here e.g. a header or sidebar */}
      <section>{children}</section>
    </div>
  );
}
