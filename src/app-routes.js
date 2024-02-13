// import { lazy } from 'react';

// 전체 라우트 설정
// const LazyComponent = lazy(() => import('./domain/LazyComponent'));

const routes = [
  // {
  //   path: '/',
  //   component: LazyComponent,
  // },
];

export default routes.map(route => ({
  ...route,
  component: route.component,
}));
