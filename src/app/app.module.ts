import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// 1. create routes
const routes: Routes = [
  { path:"reactive", component:ReactiveComponent},
  { path:"template", component:TemplateComponent},
  { path:'', redirectTo:'template',pathMatch:'full'},
  { path:'**', component:NotFoundComponent},

]

// 2. register routes
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TemplateComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
