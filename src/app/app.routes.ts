import { Routes } from '@angular/router';
import { Alumno } from './alumno/alumno';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    { path:'', redirectTo: 'alumno', pathMatch: 'full'  },
    { path:'alumno', component: Alumno},
    { path: 'formulario', component: Formulario},
    { path: '**', redirectTo: 'alumno'}
];
