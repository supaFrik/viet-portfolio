import type { SVGProps } from "react";

const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M32 4l18 8v14c0 14-10 24-18 28-8-4-18-14-18-28V12l18-8Z" fill="#0F766E" />
    <path d="M24 30l4 8 12-10" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export { Shield };
