import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuickAppProMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ConstanciaComponent } from './components/constancia/constancia.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdminComponent,
    PersonaComponent,
    ConstanciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    QuickAppProMaterialModule,
    FormsModule, 
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

