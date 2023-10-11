import React, { SVGProps } from 'react';

export const IconHidePassword: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      {...props}
      width='1em'
      height='1em'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.5 3.188C4.793 3.188 1.579 5.345 0 8.5c1.579 3.153 4.793 5.313 8.5 5.313s6.921-2.16 8.5-5.313c-1.579-3.154-4.793-5.313-8.5-5.313Zm4.192 2.817a8.092 8.092 0 0 1 2.48 2.495 8.069 8.069 0 0 1-2.48 2.495 7.784 7.784 0 0 1-8.383 0A8.091 8.091 0 0 1 1.83 8.5a8.068 8.068 0 0 1 2.677-2.616 4.25 4.25 0 1 0 7.988 0l.197.121ZM8.5 6.906a1.594 1.594 0 1 1-3.189 0 1.594 1.594 0 0 1 3.189 0Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};
