import type { SVGProps } from "react";

const Template = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="10" y="10" width="44" height="44" rx="6" fill="#1F2937" />
    <path d="M18 16h28" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <path d="M18 28h28" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <path d="M18 40h28" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <path d="M24 20l-4 4 4 4" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 20l4 4-4 4" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export { Template };
