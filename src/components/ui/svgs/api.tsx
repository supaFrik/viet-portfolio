import type { SVGProps } from "react";

const Api = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="10" y="18" width="44" height="28" rx="6" fill="#1F75FE" />
    <circle cx="24" cy="32" r="4" fill="#fff" />
    <circle cx="40" cy="32" r="4" fill="#fff" />
    <path d="M18 32h8M38 32h8" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <path d="M20 28l-6-6M44 28l6-6" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export { Api };
