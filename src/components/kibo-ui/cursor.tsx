"use client";

import React, { createContext, useContext, useRef, useEffect, ReactNode } from "react";

interface CursorContextType {
  cursorRef: React.RefObject<HTMLDivElement | null>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a Cursor component");
  }
  return context;
};

interface CursorProps {
  children: ReactNode;
}

export const Cursor = ({ children }: CursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(calc(-50% + ${event.clientX}px), calc(-50% + ${event.clientY}px))`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorRef }}>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </CursorContext.Provider>
  );
};

interface CursorPointerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CursorPointer = ({ className = "", ...props }: CursorPointerProps) => (
  <div className={`h-3 w-3 rounded-full ${className}`} {...props} />
);

interface CursorBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CursorBody = ({ className = "", ...props }: CursorBodyProps) => (
  <div
    className={`rounded-lg px-3 py-2 text-sm shadow-lg ${className}`}
    {...props}
  />
);

interface CursorNameProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CursorName = ({ className = "", ...props }: CursorNameProps) => (
  <div className={`font-semibold ${className}`} {...props} />
);

interface CursorMessageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CursorMessage = ({
  className = "",
  ...props
}: CursorMessageProps) => (
  <div className={`text-xs opacity-75 ${className}`} {...props} />
);
