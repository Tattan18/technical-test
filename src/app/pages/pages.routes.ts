import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component'),
      },
      {
        path: 'products',
        loadComponent: () => import('./products-page/products-page.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
] as Routes;
