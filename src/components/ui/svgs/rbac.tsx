import type { SVGProps } from "react";

const Rbac = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="24" r="8" fill="#0F172A" />
    <circle cx="44" cy="24" r="8" fill="#0F172A" />
    <circle cx="32" cy="44" r="8" fill="#0F172A" />
    <path d="M24 29l8 5 8-5" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M20 32v8M44 32v8" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

export { Rbac };
