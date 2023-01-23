import { ReactNode, useState } from "react";

export interface NestedLayoutProps {
  children: ReactNode;
}

export function NestedLayout({ children }: NestedLayoutProps) {
  const [input, setInput] = useState("");

  return (
    <div className="nested-layout">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{children}</div>
    </div>
  );
}
