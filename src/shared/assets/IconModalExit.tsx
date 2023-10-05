import { SVGProps } from 'react';

export const IconModalExit: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14.037 5.174a.5.5 0 0 1 .707 0l.888.888a.5.5 0 0 1 0 .707l-8.863 8.863a.5.5 0 0 1-.707 0l-.888-.888a.5.5 0 0 1 0-.707l8.863-8.863Z'></path>
      <rect
        x='4.821'
        y='6.416'
        width='2.256'
        height='13.533'
        rx='0.5'
        transform='rotate(-45 4.82 6.416)'
      ></rect>
    </svg>
  );
};
