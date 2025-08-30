import type { ReactNode } from "react";

type SectionProp = {
  children: ReactNode;
};

export function Section({ children }: SectionProp) {
  return (
    <div className="flex flex-col border-1 border-gray-200 rounded-2xl mt-8 ml-36 mr-36 p-8">
      {children}
    </div>
  );
}
