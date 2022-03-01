import React, { lazy, Suspense } from 'react';

const LazyTask = lazy(() => import('./Task'));

const Task = props => (
  <Suspense fallback={null}>
    <LazyTask {...props} />
  </Suspense>
);

export default Task;
