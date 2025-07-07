import { ReactNode } from "react";

export default function SectionBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-terminal-border rounded p-4 text-sm font-mono text-[var(--text)]">
      <h2 className="text-xs mb-3 tracking-wide text-[var(--accent)] uppercase">
        [ {title} ]
      </h2>
      {children}
    </div>
  );
}
