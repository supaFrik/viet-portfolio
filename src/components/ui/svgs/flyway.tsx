import type { SVGProps } from "react";

const Flyway = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="18" width="52" height="28" rx="14" fill="#1B3A6B" />
    <path d="M19 33l8-6 10 8 14-8" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M46 24l6 8-6 8" stroke="#F7931E" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export { Flyway };
