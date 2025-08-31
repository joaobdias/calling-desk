import type { ReactNode } from "react";

type SectionProp = {
  children: ReactNode;
};

export function Section({ children }: SectionProp) {
  return (
    <div className="flex flex-col border-1 border-gray-500 rounded-2xl mt-8 ml-32 mr-32 p-8">
      {children}
    </div>
  );
}
