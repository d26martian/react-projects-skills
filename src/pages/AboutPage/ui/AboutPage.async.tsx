import { lazy } from 'react';

// export const AboutPageAcync = lazy(() => import('./AboutPage'));

export const AboutPageAcync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}));