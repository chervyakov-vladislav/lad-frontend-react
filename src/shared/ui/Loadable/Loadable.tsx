import { ElementType, Suspense } from 'react';
import { FullPageWrapper } from '../FullPageWrapper';
import { Spinner } from '../Spinner';

export const Loadable = (Component: ElementType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function fn(props: any) {
    return (
      <Suspense
        fallback={
          <FullPageWrapper>
            <Spinner />
          </FullPageWrapper>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
};
