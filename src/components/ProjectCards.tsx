import { ReactNode } from "react";

export const ProjectCard = ({
  icon,
  title,
  description,
  children,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <div className="border border-terminal-border rounded p-4">
      <h3 className="font-semibold text-terminal-yellow flex items-center gap-2">
        {icon} {title}
      </h3>
      <p className="text-sm">{description}</p>
      {children}
    </div>
  );
};
