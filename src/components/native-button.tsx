import { ReactNode } from "react";

const NativeButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="px-1 bg-gray-300 border border-black rounded text-sm">
      {children}
    </button>
  );
};

export default NativeButton;
