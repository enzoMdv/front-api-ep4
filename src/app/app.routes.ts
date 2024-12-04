import { Routes } from '@angular/router';

export const routes: Routes = [

    {
    path: '',
    loadComponent: () =>import('./ep4/pagina/login/login.component')
    },
    {
    path: 'principal',
    loadComponent: () =>import('./ep4/pagina/principal/principal.component')
    }
];
