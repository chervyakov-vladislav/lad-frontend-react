import { SVGProps } from 'react';

export const IconTopFilms: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      {...props}
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.08865 2.2225L15.5562 9.99875L8.0899 17.7775L6.6674 16.3013L12.7374 9.99875L6.6674 3.69875L8.08865 2.2225Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};
