import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ConstanciaComponent } from './components/constancia/constancia.component';
import { PersonaComponent } from './components/persona/persona.component';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: AdminComponent },
    { path: 'persona', component: PersonaComponent },
    { path: 'constancia', component: ConstanciaComponent }
];

