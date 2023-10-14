import React, { SVGProps } from 'react';

export const IconShowPassword: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      {...props}
      width='1em'
      height='1em'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#IconClosedEye_svg__a)' fill='currentColor'>
        <path d='M15.704.234a.797.797 0 0 0-1.127 0L11.221 3.59A9.366 9.366 0 0 0 8.5 3.188c-3.707 0-6.922 2.16-8.5 5.313a9.75 9.75 0 0 0 2.872 3.438l-2.64 2.64a.797.797 0 0 0 1.127 1.127L15.702 1.362a.797.797 0 0 0 0-1.127l.002-.001ZM6.907 5.312c.701 0 1.296.453 1.51 1.083l-2.021 2.02a1.594 1.594 0 0 1 .511-3.104ZM1.829 8.5a8.068 8.068 0 0 1 2.678-2.616 4.23 4.23 0 0 0-.256 1.455c0 .911.287 1.755.775 2.446l-1.011 1.012A8.101 8.101 0 0 1 1.829 8.5ZM12.75 7.338c0-.45-.07-.885-.2-1.293l-5.343 5.342a4.25 4.25 0 0 0 5.543-4.05Z'></path>
        <path d='m13.78 4.814-1.152 1.152c.021.013.042.025.062.04A8.091 8.091 0 0 1 15.171 8.5a8.07 8.07 0 0 1-2.48 2.495 7.784 7.784 0 0 1-6.083.991l-1.276 1.276c.99.356 2.058.55 3.168.55 3.707 0 6.921-2.159 8.5-5.312a9.713 9.713 0 0 0-3.22-3.686Z'></path>
      </g>
      <defs>
        <clipPath id='IconClosedEye_svg__a'>
          <path fill='#fff' d='M0 0h16v16H0z'></path>
        </clipPath>
      </defs>
    </svg>
  );
};
